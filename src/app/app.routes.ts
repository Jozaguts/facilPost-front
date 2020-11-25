import {Routes, RouterModule} from '@angular/router';


import {RegisterComponent} from './login/register.component';
import {PagenotfoundComponent} from './shared/pagenotfound/pagenotfound.component';
import {LoginComponent} from './login/login.component';
import {LoginGuardGuard} from './services/service.index';
import {AdminComponent} from './pages/admin/admin.component';
import {PagesComponent} from './pages/pages.component';
import {ListComponent} from './shared/products/list/list.component';
import {ProductComponent} from './shared/products/product/product.component';


const appRoutes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent, canActivate: [LoginGuardGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [LoginGuardGuard],
  children: [
    {path: '', component: ListComponent},
    {path: 'product/:id', component: ProductComponent}
  ]},
  {path: '', component: PagesComponent, loadChildren: './pages/pages.module#PagesModule'},
  {path: '**', component: PagenotfoundComponent},

];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
