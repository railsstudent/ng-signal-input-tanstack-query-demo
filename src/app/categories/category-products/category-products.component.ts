import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { ProductComponent } from '../../products/product/product.component';
import { CategoryService } from '../services/category.service';
import { CreateProductComponent } from '../create-product/create-product.component';

@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [ProductComponent, TitleCasePipe, CreateProductComponent],
  template: `
    <app-create-product [category]="this.category()" />
    <h2>{{ category() | titlecase }}</h2>
    @if (productsQuery.isPending()) {
      <p>Loading...</p>
    } @else if (productsQuery.isError()) {
      <p>Error</p>
    } @else if (productsQuery.isSuccess()) {
      @if (productsQuery.data(); as products) {
        @if (products.length > 0) {
          <div class="products">
            @for(product of products; track product.id) {
              <app-product [product]="product" />
            }
          </div>
        } @else {
          <p>Category does not have products</p>
        }
      }
    }
  `,
  styles: `
    div.products {
      display: flex;
      flex-wrap: wrap;
      align-content: stretch;
    }

    app-product {
      flex-basis: 250px;
      height: 300px;
      margin-bottom: 1rem;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryProductsComponent {
  categoryService = inject(CategoryService);

  category = input('');

  productsQuery = injectQuery(() => ({
      queryKey: ['categories', this.category()] as const,
      queryFn: () => this.categoryService.getCategory(this.category())
    })
  ); 
}