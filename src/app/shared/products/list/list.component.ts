import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product/product.service';
import {Router} from '@angular/router';
import swal from 'sweetalert';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  page = 1;
  products: any[] = [];
  registerTotal = 0;
  constructor(public _productService: ProductService, public router: Router) { }

  ngOnInit(): void {
    this.loadProducts();
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
  loadProducts(): void {
    this._productService.loadProducts(this.page)
      .subscribe( (resp: any) => {
        this.registerTotal = resp.meta.total;
        this.products = resp.data;
      });
  }
  update(id: number): void{
    this._productService.showProduct(id).subscribe( (resp: any) => {
      localStorage.setItem('product', JSON.stringify(resp.data || ''));
      this.router.navigate(['/admin/product/', id]);
    });

  }
  delete(id: string): void{
    this._productService.deleteProduct(id).subscribe((resp: any) => {
      swal(' Success!', 'Product was deleted successfully!', 'success');
      this.loadProducts();
    });
  }

}
