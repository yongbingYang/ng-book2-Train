import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Product } from '../product.model';
@Component({
  selector: 'app-product-list',
  template: `
    <div class="ui items">
      <app-product-row
        *ngFor="let myProduct of products"
        [product]="myProduct"
        (click)="clicked(myProduct)"
        [class.selected]="isSelected(myProduct)">
      </app-product-row>
    </div>
  `,
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  /*
    如果Input要使用别名可以这样定义 @Input('shortName') name:string;
    则父组件使用 <parent-component [shortName]="myName"></parent-component>
  */
  @Input() products: Product[];
  @Output() productSelected: EventEmitter<Product>;
  private currentProduct: Product;   // 当前选中的商品
  constructor() {
    this.productSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  clicked(product: Product) {
    this.currentProduct = product;
    this.productSelected.emit(product);
  }
  isSelected(product: Product) {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}
