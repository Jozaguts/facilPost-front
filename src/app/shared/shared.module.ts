import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
  ],
  imports: [
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
  ]
})
export class SharedModule {}
