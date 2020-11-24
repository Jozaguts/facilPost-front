import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../models/user.model';
import {UserService} from '../services/service.index';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(
    public _userService: UserService,
    public router: Router
  ) {}

  passwordValidate(password: string, passwordConfirm: string): object{
    return (group: FormGroup) => {

      const pass = group.controls[password].value;
      const passConf = group.controls[passwordConfirm].value;

      if (pass === passConf){
        return null;
      }
      return {areEquals: true};
    };
  }

  ngOnInit(): void {

    this.registerForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      passwordConfirm: new FormControl(null, Validators.required)
      // @ts-ignore
    }, {validators: this.passwordValidate('password', 'passwordConfirm')});
  }

  register(): any{

    if (this.registerForm?.invalid){
      return;
    }


    const user = new User(
        this.registerForm.value.name,
        this.registerForm.value.email,
        this.registerForm.value.password,
    );
    this._userService.store(user).subscribe((res: any) => this.router.navigate(['/login']));
  }
}
