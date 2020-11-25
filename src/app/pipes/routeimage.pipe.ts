import { Pipe, PipeTransform } from '@angular/core';
import {SERVICES_URL} from '../config/config';

@Pipe({
  name: 'routeimage'
})
export class RouteimagePipe implements PipeTransform {

  transform(value: any): any {
    if (value.includes('public')){
      const regex = /public/gi;
      return `${SERVICES_URL}/${value.replace(regex, 'storage')}`;
    }
    return value;

  }

}
