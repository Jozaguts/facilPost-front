import { Component, OnInit } from '@angular/core';
import {ProductService, UserService} from '../../services/service.index';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  constructor(public _userService: UserService, public _productService: ProductService, public router: Router) { }
  page = 1;
  products: any[] = [];
  registerTotal = 0;

  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts(): void {
    this._productService.loadProducts(this.page)
      .subscribe( (resp: any) => {
        this.registerTotal = resp.meta.total;
        this.products = resp.data;
      });
  }

}
