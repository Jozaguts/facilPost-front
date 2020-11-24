import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SERVICES_URL} from '../../config/config';
import {Product} from '../../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http: HttpClient) {}
  loadProducts(from: number = 1): any {

    const url = SERVICES_URL + '/api/products?from=' + from;

    return this.http.get(url);
  }

  showProduct(id: number): any {
    const url = SERVICES_URL + '/api/products/' + id;
    return this.http.get(url);
  }
}
