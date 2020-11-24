import {PagesComponent} from './pages.component';
import {ProductsComponent} from './products/products.component';
import {RouterModule} from '@angular/router';

const pagesRoutes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'products', component: ProductsComponent},
      {path: '', redirectTo: '/products', pathMatch: 'full'},
    ]
  },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);

