import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
  ]
})
export class SharedModule {}
