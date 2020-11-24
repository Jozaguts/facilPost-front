import {Component, OnInit} from '@angular/core';
import {Product} from '../../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  // @ts-ignore
  product: Product;

  ngOnInit(): void {
    this.loadProduct();
  }
  loadProduct(): void{
    this.product = JSON.parse(localStorage.getItem('product') || '');
  }
}
