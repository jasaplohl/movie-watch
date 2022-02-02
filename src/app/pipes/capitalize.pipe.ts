import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(text_: String): unknown {
    const text = text_.charAt(0).toUpperCase() + text_.slice(1);
    return text;
  }

}
