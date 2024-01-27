import { JsonPipe, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input, signal, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { injectMutation, QueryClient } from '@tanstack/angular-query-experimental';
import { CreateProductViewModel } from '../interfaces/create-product.interface';
import { CategoryService } from '../services/category.service';

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

  queryClient = new QueryClient();

  mutation = injectMutation(() => ({
    mutationFn: (viewModel: CreateProductViewModel) => {
      return this.categoryService.addProduct(viewModel)
    },
    onMutate: async (variables) => {

      // Cancel current queries for the product
      // await this.queryClient.cancelQueries({ queryKey: ['category_products'] });

      // // Cancel current queries for the category products list
      // await this.queryClient.cancelQueries({ queryKey: ['categories', this.category()] });

      // const oldData = this.queryClient.getQueryData(['category_products']);
      // console.log('onMutate, category_products', oldData,
      //   this.queryClient.getQueryState(['category_products'])
      // );

      console.log('onMutate', variables);
    },
    onError: (error, variables, context) => {
      // An error happened!
      console.log('onError', error, variables, context);
    },
    onSuccess: (data, variables, context) => {
      console.log('onSuccess', data, variables, context);
      this.resetViewModel();
    },
    onSettled: (data, error, variables, context) => {
      // Error or success... doesn't matter!
      console.log('onSettled', data, error, variables, context);
    },
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
