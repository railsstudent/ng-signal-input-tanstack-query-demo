import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from '../services/cart.service';
import { CartItem } from '../types/cart.type';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [FormsModule, RouterLink],
  template: `
    <div class="row">
      <p style="width: 10%">
        <a [routerLink]="['/products', item().id]">{{ item().id }}</a>
      </p>
      <p style="width: 20%">{{ item().title }}</p>
      <p style="width: 40%">{{ item().description }}</p>
      <p style="width: 10%">{{ item().price }}</p>
      <p style="width: 10%">
        <input style="width: 50px;" type="number" min="1" [ngModel]="item().quantity" #ctrl="ngModel" />
      </p>
      <p style="width: 10%">
        <button class="btnUpdate" (click)="update(item().id, ctrl.value)">Update</button>
        <button (click)="delete(item().id)">X</button>
      </p>
    </div>
  `,
  styles: [`
    .row {
      display: flex;
    }

    .row > p {
      border: 1px solid black;
    }

    .btnUpdate {
      margin-right: 0.25rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {
  cartService = inject(CartService);

  item = input.required<CartItem>();

  delete(id: number) {
    this.cartService.deleteItem(id);
  }

  update(id: number, quantity: number) {
    this.cartService.updateItem(id, quantity);
  }
}