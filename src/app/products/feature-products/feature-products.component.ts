import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-feature-products',
  standalone: true,
  imports: [ProductComponent],
  template: `
    @if (featuredProductsQuery.isPending()) {
      <p>Loading featured products...</p>
    } @else if (featuredProductsQuery.isSuccess()) {
      <h2>Featured Products</h2>
      @if (featuredProductsQuery.data(); as data) {
        <div class="featured">
          @for (product of data; track product.id) {
            <app-product [product]="product" class="item" />
          }
        </div>
      }
      <hr>
    }
  `,
  styles: `
    h2, hr {
      margin-bottom: 0.5rem;
    }

    div.featured {
      display: flex;
      flex-wrap: wrap;

      margin-bottom: 0.75rem;
    }

    div.featured > .item {
      flex-basis: 250px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureProductsComponent {
  private readonly productService = inject(ProductService);

  featuredProductsQuery = injectQuery(() => ({
      queryKey: ['feature_products'] as const,
      queryFn: () => this.productService.getFeaturedProducts()
    })
  );
}