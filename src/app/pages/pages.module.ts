import {NgModule} from '@angular/core';
import {PAGES_ROUTES} from './pages.routes';

// import {PagesComponent} from './pages.component';

import {ProductsComponent} from './products/products.component';
import {SharedModule} from '../shared/shared.module';
import {ServiceModule} from '../services/service.module';
import { AdminComponent } from './admin/admin.component';
import {CommonModule} from '@angular/common';
import { ProductComponent } from './products/product/product.component';
import {PipesModule} from '../pipes/pipes.module';



@NgModule({
  declarations: [
    // PagesComponent,
    ProductsComponent,
    AdminComponent,
    ProductComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    ServiceModule,
    CommonModule,
    PipesModule
  ],
  exports: [
    ProductsComponent,
    ProductComponent
  ]
})
export class PagesModule {}
