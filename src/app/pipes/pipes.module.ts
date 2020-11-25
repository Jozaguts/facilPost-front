import { NgModule } from '@angular/core';
import {DiscountPipe} from './discount.pipe';
import {RouteimagePipe} from './routeimage.pipe';


@NgModule({
  declarations: [DiscountPipe, RouteimagePipe],
  imports: [],
  exports: [DiscountPipe, RouteimagePipe]
})
export class PipesModule { }
