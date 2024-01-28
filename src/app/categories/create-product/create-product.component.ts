import { JsonPipe, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild, computed, inject, input, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { QueryClient, injectMutation } from '@tanstack/angular-query-experimental';
import { CreateProductViewModel } from '../interfaces/create-product.interface';
import { CategoryService } from '../services/category.service';
import { Product } from '../../products/interfaces/product.interface';
import { CategoryProducts } from '../interfaces/category-products.interface';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [FormsModule, JsonPipe, TitleCasePipe],
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

  categoryService = inject(CategoryService);

  title = signal('');
  description = signal('');
  price = signal(1);

  viewModel = computed<CreateProductViewModel>(() => ({
    title: this.title(),
    price: this.price(),
    description: this.description(),
    category: this.category(),
  }));

  mutation = injectMutation((client: QueryClient) => ({
    mutationFn: (viewModel: CreateProductViewModel) => {
      return this.categoryService.addProduct(viewModel)
    },
    onMutate: async (variables) => {
      const categoryProductsKey =['category_products'] as const;
      const categoryKey = ['categories', this.category()] as const;

      // Cancel current queries for the product
      await client.cancelQueries({ queryKey: categoryProductsKey });

      // // Cancel current queries for the category products list
      await client.cancelQueries({ queryKey: categoryKey });

      // snapshot the previous values
      const previousAllProducts = client.getQueryData<CategoryProducts[]>(categoryProductsKey);
      const previousCategoryProducts = client.getQueryData<Product[]>(categoryKey);
      const newProduct: Product = {
        ...variables,
        id: Date.now(),
        image: '',
      };

      console.log(previousCategoryProducts, previousAllProducts, newProduct);

      if (previousCategoryProducts) {
        client.setQueryData(categoryKey, (old: Product[]) => ([...old, newProduct]));
      } else {
        client.setQueryData(categoryKey, () => ([newProduct]));
      }
      if (previousAllProducts) {
        const categoryProducts = previousAllProducts.find((catProducts) => catProducts.category === this.category());
        if (categoryProducts) {
          categoryProducts.products = [...categoryProducts.products, newProduct]; 
        } else {

        }
        // client.setQueryData();
      }


      // console.log('onMutate', variables);
      return {
        previousAllProducts,
        previousCategoryProducts,
        newProduct,
      }
    },
    onError: (error, variables, context) => {
      // An error happened!
      const categoryProductsKey =['category_products'] as const;
      const categoryKey = ['categories', this.category()] as const;

      // rollback changes
      client.setQueryData(categoryKey, context?.previousCategoryProducts); 
      client.setQueryData(categoryProductsKey, context?.previousAllProducts);
      console.log('onError', error, variables, context);
    },
    onSuccess: (data, variables, context) => {
      console.log('onSuccess', data, variables, context);

      this.resetViewModel();
    },
    // onSettled: (data, error, variables, context) => {
    //   // Error or success... doesn't matter!
    //   console.log('onSettled', data, error, variables, context);
    // },
  }));

  category = input.required<string>();

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
