import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor(private apiService: ApiService) { }

  isPasswordConfirm(group: FormGroup) {
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;
    if (password === confirmPassword) {
      group.get('confirmPassword').setErrors(null)
      return null

    } else {
          if (group.get('confirmPassword').dirty ) {
        group.get('confirmPassword').setErrors( { errorMessage: 'Passwords do not match!' })
      }
      return { notSame: true }

    }
    // return password === confirmPassword ? null : { notSame: true }
  }
  // isValidConformPassword(control: AbstractControl) {
  //   // return control?.parent?.errors?.notSame && control.dirty 
  //   //  ?  { errorMessage: 'Passwords do not match!' }:null
  //   return null
  // }
  validateUserNameViaServer = ({ value }: AbstractControl): Observable<ValidationErrors | null> => {

    return this.apiService.isUserNameExist(value).pipe(debounceTime(500), map((res: any) => {
      console.log(res);

      if (res && res.error) {
        return {
          errorMessage: res.error
        }
      }
      return null
    }))
  }


  validateEmailViaServer = ({ value }: AbstractControl): Observable<ValidationErrors | null> => {

    return this.apiService.isEmailExist(value).pipe(debounceTime(500), map((res: any) => {
      console.log(res);

      if (res && res.error) {
        return {
          errorMessage: res.error
        }
      }
      return null
    }))
  }
  validateidViaServer = ({ value }: AbstractControl): Observable<ValidationErrors | null> => {

    return this.apiService.isValidId(value).pipe(debounceTime(500), map((res: any) => {
      console.log(res);

      if (res && res.error) {
        return {
          errorMessage: res.error
        }
      }
      return null
    }))
  }

}

