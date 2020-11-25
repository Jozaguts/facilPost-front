import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {SERVICES_URL} from '../../config/config';
import {Product} from '../../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}
  loadProducts(from: number = 1): any {

    const url = SERVICES_URL + '/api/products?from=' + from;

    return this.http.get(url);
  }

  showProduct(id: number): any {
    const url = SERVICES_URL + '/api/products/' + id;
    return this.http.get(url);
  }
  updateProduct(id: any, data: any): any{
    const url = SERVICES_URL + '/api/products/' + id + '?_method=PUT';
    const auth_token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${auth_token}`
    });
    return this.http.post(url, data, { headers});
  }
}
