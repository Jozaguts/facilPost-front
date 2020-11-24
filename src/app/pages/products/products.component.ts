import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product.model';
import {ProductService} from '../../services/service.index';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  page = 1;
  products: any[] = [];
  registerTotal = 0;


  constructor(public _productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this._productService.loadProducts(this.page)
      .subscribe( (resp: any) => {
        this.registerTotal = resp.meta.total;
        this.products = resp.data;
        console.log(this.products);
      });
  }
  changeFrom(from: number): void{
    const fromTo = this.page + from;

    if (fromTo >= this.registerTotal ){
      return;
    }

    if (fromTo < 0 ) {
      return;
    }
    this.page += from;
    this.loadProducts();
  }

}
