import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QueryClient, injectMutation } from '@tanstack/angular-query-experimental';
import { FormDirective } from '../../forms/form.directive';
import { Product } from '../../products/interfaces/product.interface';
import { ProductService } from '../../products/services/product.service';
import { CategoryProducts } from '../interfaces/category-products.interface';
import { CreateProductViewModel } from '../interfaces/create-product.interface';
import { CategoryService } from '../services/category.service';
import { CreateProductFormModel } from '../types/create-product-form-model.type';

const INITIAL_FORM_VALUES = { title: '', description: '', price: 1 };

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [FormsModule, TitleCasePipe, FormDirective],
  templateUrl: './create-product.component.html',
  styles: `
    form {
      padding: 0.75rem 0.5rem;
      border: 1px solid black;
    }

    form > * {
      margin-bottom: 0.5rem;
    }

    label > span {
      display: inline-block;
      width: 20%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateProductComponent {
  category = input.required<string>();
  categoryService = inject(CategoryService);
  productService = inject(ProductService);

  formValue = signal<CreateProductFormModel>(INITIAL_FORM_VALUES);
  formInvalid = signal<boolean>(false);
  shouldMarkAsPristine = signal(false);

  viewModel = computed(() => ({
    formValue: this.formValue(),
    category: this.category(),
    image: 'https://via.assets.so/img.jpg?w=100&h=100&tc=yellow&bg=blue&t=product',
    isFormDisabled: this.formInvalid() || this.mutation.isPending(),
    isControlDisabled: this.mutation.isPending(),
  }));

  get vm() {
    return this.viewModel();
  }

  categoryProductsKey =['category_products'] as const;
  get categoryKey() { 
    return ['categories', this.category()] as const;
  }

  mutation = injectMutation((client: QueryClient) => ({
    mutationFn: (viewModel: CreateProductViewModel) => this.categoryService.addProduct(viewModel),
    onMutate: async (variables) => {
      await client.cancelQueries({ queryKey: this.categoryProductsKey });
      await client.cancelQueries({ queryKey: this.categoryKey });

      const newProduct: Product = {
        ...variables,
        id: this.productService.getNewProductId(),
      };

      // snapshot the previous values
      const previousCategoryProducts = this.optimisticUpdateCategoryProducts(client, newProduct);
      const previousAllProducts = this.optimisticUpdateAllProducts(client, newProduct);

      return {
        previousAllProducts,
        previousCategoryProducts,
      }
    },
    onSettled: (data, error, _, context) => {
      const previousCategoryProducts = context?.previousCategoryProducts;
      const previousAllProducts = context?.previousAllProducts;
      if (error) {
        // rollback changes
        client.setQueryData(this.categoryKey, previousCategoryProducts); 
        client.setQueryData(this.categoryProductsKey, previousAllProducts);
      } else {
        this.resetViewModel();
      }

      // in real production system,  call client.invalidateQueries to refetch data
      // client.invalidateQueries({ queryKey: this.categoryKey});
      // client.invalidateQueries({ queryKey: this.categoryProductsKey});
    }
  }));

  private optimisticUpdateAllProducts(client: QueryClient, newProduct: Product) {
    const previousAllProducts = client.getQueryData<CategoryProducts[]>(this.categoryProductsKey);
    if (previousAllProducts) {
      const newAllProducts: CategoryProducts[] = previousAllProducts.map((previousResult) => {
        if (previousResult.category === this.vm.category) {
          return {
            category: previousResult.category,
            products: [...previousResult.products, newProduct],
          };
        }
        return previousResult;
      });
      client.setQueryData(this.categoryProductsKey, newAllProducts);
    }
    return previousAllProducts;
  }

  private optimisticUpdateCategoryProducts(client: QueryClient, newProduct: Product) {
    const previousCategoryProducts = client.getQueryData<Product[]>(this.categoryKey);
    if (previousCategoryProducts) {
      client.setQueryData(this.categoryKey, (old: Product[]) => ([...old, newProduct]));
    }
    return previousCategoryProducts;
  }

  resetViewModel() {
    this.formValue.set(INITIAL_FORM_VALUES);
    this.shouldMarkAsPristine.set(true);    
  }

  createProduct() {
    this.shouldMarkAsPristine.set(false);
    const { formValue, category, image } = this.vm;
    const payload: CreateProductViewModel = {
      title: formValue.title || '',
      description: formValue.description || '',
      price: formValue.price || 1,
      category,
      image,
    };
    this.mutation.mutate(payload);
  }
}
