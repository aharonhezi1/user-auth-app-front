import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Pipe({
  name: 'formgroupControlKeys'
})
export class FormgroupControlKeysPipe implements PipeTransform {

  transform(form: FormGroup, ...args: unknown[]): string[] {
    return Object.keys(form.value);
  }

}
