import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {RouterModule} from '@angular/router';
import { ListComponent } from './products/list/list.component';
import { ProductComponent } from './products/product/product.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {PipesModule} from '../pipes/pipes.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
    ListComponent,
    ProductComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    PipesModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ListComponent,
    ProductComponent,
    PagenotfoundComponent,
  ]
})
export class SharedModule {}
