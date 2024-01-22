import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { CartService } from '../../carts/services/cart.service';
import { Product } from '../interfaces/product.interface';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [TitleCasePipe, FormsModule, RouterLink],
  template: `
    <div>
      @if (productQuery.isPending()) {
        <p>Loading...</p>
      } @else if (productQuery.isError()) {
        <p>{{ productQuery.error().message }}</p>
      } @else if (productQuery.isSuccess()) {
        @if (productQuery.data(); as data) {
          @if (data) {
            <div class="product">
              <div class="row">
                <img [src]="data.image" [attr.alt]="data.title || 'product image'" width="200" height="200" />
              </div>
              <div class="row">
                <span>Id:</span>
                <span>{{ data.id }}</span>
              </div>
              <div class="row">
                <span>Category: </span>
                <a [routerLink]="['/categories', data.category]">{{ data.category | titlecase }}</a>
              </div>
              <div class="row">
                <span>Description: </span>
                <span>{{ data.description }}</span>
              </div>
              <div class="row">
                <span>Price: </span>
                <span>{{ data.price }}</span>
              </div> 
            </div>
            <div class="buttons">
              <input type="number" class="order" min="1" [ngModel]="quantity()" (ngModelChange)="quantity.set($event)" />
              <button (click)="addItem(data)">Add</button>
            </div>
          }
        }
      }
    </div>
  `,
  styles: [`
    .product, .buttons {
      margin-bottom: 1rem;
    }

    .row > span {
      display: inline-block;
      margin-bottom: 0.25rem;
    }

    .row > span:first-of-type {
      color: #aaa;
      width: 20%;
    }

    .row > span:nth-of-type(2) {
      width: 80%;
    }

    input.order {
      width: 100px;
      height: 30px;
      margin-right: 0.5rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent {
  id = input<number | undefined>();

  cartService = inject(CartService);
  productService = inject(ProductService);
  quantity = signal(1);
  productQuery = injectQuery(() => ({
      queryKey: ['products', this.id()] as const,
      queryFn: () => this.productService.getProduct(this.id())
    })
  );

  addItem(product: Product) {
    if (product) {
      this.cartService.addItem(product, this.quantity());
    }
  }
}