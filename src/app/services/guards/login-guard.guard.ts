import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from '../user/user.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(public _userService: UserService,   public router: Router) {}

  canActivate(): boolean{

    if (this._userService.isLogged()){
      return true;
    }else{
      console.log('bloquedo');
      this.router.navigate(['/products']);
      return false;
    }
  }

}
