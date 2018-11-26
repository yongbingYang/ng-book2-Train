import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'inventory-app-root',
  template: `
    <div class="inventory-app">
      <app-product-list [products]="products"
      (productSelected)="productWasSelected($event)">
      </app-product-list>
    </div>
  `
})
export class AppComponent {
  products: Product[];
  constructor() {
    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/assets/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '/assets/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99)
    ];
  }

  productWasSelected(product: Product) {
    console.log('Product clicked:', product);
  }
}
