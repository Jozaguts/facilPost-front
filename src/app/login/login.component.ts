import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../services/service.index';
import {User} from '../models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public _userService: UserService,
    public router: Router
  ) { }

  remember = false;
  email: string | undefined;
  ngOnInit(): void {
    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 2){
      this.remember = true;
    }
  }

  login(form: NgForm): any{

    if (form.invalid){
      return;
    }

    const user = new User('', form.value.email, form.value.password);

    this._userService.login(user, form.value.remember).subscribe( (resp: any) => this.router.navigate(['/admin']));

  }

}
