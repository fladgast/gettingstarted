import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {}

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  addThree(): void {
    this.cartService.addToCart(products[0])
    this.cartService.addToCart(products[1])
    this.cartService.addToCart(products[2])
  }

  clearCart() {
    this.cartService.clearCart()
  }

  removeItem(i: number): void {
    this.cartService.items.splice(i, 1);
  }
}
