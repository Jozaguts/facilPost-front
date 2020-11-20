import {Routes, RouterModule} from '@angular/router';
import {ProductsComponent} from './pages/products/products.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {LoginComponent} from './login/login.component';
import {PagesComponent} from './pages/pages.component';
import {RegisterComponent} from './login/register.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'products', component: ProductsComponent},
      {path: '', redirectTo: '/products', pathMatch: 'full'},
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: PagenotfoundComponent}
];
// tslint:disable-next-line:one-variable-per-declaration
export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
