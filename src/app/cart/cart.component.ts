import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Product, products } from '../products';
import { CartService } from '../cart.service';
import { isEmpty } from '../string-utilities';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.cartService.getItems();

  errorMessage: string = "";

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }

  onSubmit(): void {
    // Process checkout data here
    if (isEmpty(this.checkoutForm.value.name) || isEmpty(this.checkoutForm.value.address)) {
      this.errorMessage = "Enter name and address"
      return
    }
    this.items = this.cartService.clearCart();
    this.errorMessage = "";
    this.checkoutForm.reset();
    window.alert('Your order has been sumbitted')
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
