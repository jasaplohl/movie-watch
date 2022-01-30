import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'year'
})
export class YearPipe implements PipeTransform {

  transform(date_: string): unknown {
    const date = new Date(date_);
    return date.getFullYear();
  }

}
