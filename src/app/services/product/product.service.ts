import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SERVICES_URL} from '../../config/config';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http: HttpClient) {}
  loadProducts(from: number = 1): any {

    const url = SERVICES_URL + '/api/products?from=' + from;
    console.log(url);
    return this.http.get(url);
  }
}
