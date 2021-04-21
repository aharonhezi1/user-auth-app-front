import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  //  decamelize(str, separator=' '){  
  //   let newStr=str
  //         .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
  //         .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
  //        newStr=str[0].toUpperCase()+newStr.slice(1)
  //         return newStr
  // }
}
