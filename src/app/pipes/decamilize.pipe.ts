import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decamilize'
})
export class DecamilizePipe implements PipeTransform {

  transform(str:string, separator=' '): string {
    let newStr=str
    .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
   newStr=str[0].toUpperCase()+newStr.slice(1)
    return newStr
  }

}
