import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {SERVICES_URL} from '../../config/config';
import {Product} from '../../models/product.model';
import {Observable} from 'rxjs';
import {User} from '../../models/user.model';


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
  deleteProduct(id: any): any{
    const url = SERVICES_URL + '/api/products/' + id;
    const auth_token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${auth_token}`
    });
    return this.http.delete(url, {headers});
  }
  createProduct(user: FormData): Observable<object> {
    const url = `${SERVICES_URL}/api/products`;
    const auth_token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${auth_token}`
    });
    return this.http.post(url, user, {headers});
  }
}
