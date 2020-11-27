import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SERVICES_URL} from '../../config/config';
// import { Observable } from 'rxjs/Observable';
import {User} from '../../models/user.model';
import { map } from 'rxjs/operators';


import swal from 'sweetalert';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  user: any = User;

  token: string = '';

  constructor(public http: HttpClient, public router: Router) {
    this.loadStorage();
  }
  loadStorage(): void{
    if ( localStorage.getItem('token')) {

      this.token = localStorage.getItem('token') || '';
      this.user = JSON.parse( localStorage.getItem('user') || '');
    } else {
      this.token = '';
      this.user = null;
    }
  }
  isLogged(): boolean {
    return  this.token.length > 5;
  }
  saveIntoStorage( token: string, user: User ): void {

    localStorage.setItem('token', token );
    localStorage.setItem('user', JSON.stringify(user) );

    this.user = user;
    this.token = token;

  }
  store( user: User ): any{
    const url = SERVICES_URL + '/api/users';
    return this.http.post(url, user ).pipe(
      map((resp: any) => {

        swal('Usuario Creado', user.email, 'success');
        return resp.user;
      })
    );
  }
  login(user: User, remember: boolean = false): any {

    if (remember){
      localStorage.setItem('email', user.email);
    }else{
      localStorage.removeItem('email');
    }
    const url = SERVICES_URL + '/api/login';

    try {
      return this.http.post(url, user) .pipe(
        map((resp: any) => {
          this.saveIntoStorage(resp.access_token, resp.user);
          return true;
        })
      );
    } catch (err){
      // @ts-ignore
      // swal( 'Error en el login', err.error.message, 'error' );
      // return Observable.throw(err);
    }
  }
  logout(): any{
    // @ts-ignore
    this.user = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('user');

    this.router.navigate(['/']);
  }
}
