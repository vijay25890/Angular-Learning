import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToInr',
})
export class UsdToInrPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const x = args;
    return value * x;
  }
}
