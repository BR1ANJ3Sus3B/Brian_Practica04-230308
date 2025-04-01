import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'practice25'
})
export class Practice25Pipe implements PipeTransform {

  transform(value: string): string {
    let reverse = '';
    for (let i = value.length - 1; i >= 0; i--) {
        reverse += value[i];
    }
    return reverse;
  }

}
