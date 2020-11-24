import {PagesComponent} from './pages.component';
import {ProductsComponent} from './products/products.component';
import {RouterModule} from '@angular/router';
import {ProductComponent} from './products/product/product.component';

const pagesRoutes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'products', component: ProductsComponent},
      {path: 'products/:id', component: ProductComponent},
      {path: '', redirectTo: '/products', pathMatch: 'full'},
    ]
  },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);

