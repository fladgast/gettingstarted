import { Component } from '@angular/core';
import { stringify } from 'querystring';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  constructor(
    private cartService: CartService
  ) {}

  products = [...products];
  
  brief: boolean = false;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  checkIfEmpty(s: string) {
    return s.trim().length
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  hideDescription() {
    this.brief = true;
  }

  showDescription() {
    this.brief = false;
  }
}
