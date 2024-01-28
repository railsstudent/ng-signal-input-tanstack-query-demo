import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild, computed, inject, input, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { QueryClient, injectMutation } from '@tanstack/angular-query-experimental';
import { Product } from '../../products/interfaces/product.interface';
import { ProductService } from '../../products/services/product.service';
import { CategoryProducts } from '../interfaces/category-products.interface';
import { CreateProductViewModel } from '../interfaces/create-product.interface';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [FormsModule, TitleCasePipe],
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
  @ViewChild('f', { static: true })
  form!: NgForm;

  category = input.required<string>();
  categoryService = inject(CategoryService);
  productService = inject(ProductService);

  title = signal('');
  description = signal('');
  price = signal(1);

  viewModel = computed<CreateProductViewModel>(() => ({
    title: this.title(),
    price: this.price(),
    description: this.description(),
    category: this.category(),
    image: 'https://via.assets.so/img.jpg?w=100&h=100&tc=yellow&bg=blue&t=product',
  }));

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
        if (previousResult.category === this.category()) {
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
    this.title.set('');
    this.description.set('');
    this.price.set(1);

    for (const key of Object.keys(this.form.controls)) {
      this.form.controls[key].markAsPristine();
    }
  }

  createProduct() {
    this.mutation.mutate(this.viewModel());
  }
}
