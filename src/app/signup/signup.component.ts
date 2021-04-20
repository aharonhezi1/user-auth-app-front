import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { from, Observable } from 'rxjs';
import { ApiService } from '../services/api.service';
import { ValidatorsService } from "../services/validators.service"
import {UtilsService} from "../services/utils.service"
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
Object=Object
  isLoading: boolean
  signupForm: FormGroup;
  controlInputType = {
    name: 'text',
    id: 'text',
    email: 'email',
    userName: 'text',
    password: 'password',
    confirmPassword: 'password'
  }

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private validatorsService: ValidatorsService, public utilsService:UtilsService) { }

  onSubmit() {
    this.isLoading = true;
    console.log(this.signupForm.value);
    this.apiService.createUser(this.signupForm.value).subscribe((res: any) => {
      console.log(res);
      this.isLoading = false
    }, (e) => {
      console.log(e);
      this.isLoading = false

    })

  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      id: ['', [Validators.required, Validators.minLength(7)], [this.validatorsService.validateidViaServer]],
      email: ['', [Validators.required, Validators.email], [this.validatorsService.validateEmailViaServer]],
      userName: ['', [Validators.required, Validators.minLength(2)], [this.validatorsService.validateUserNameViaServer]],
      password: ['', [Validators.required, Validators.minLength(2)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(2)]],

    }

      , { validators: this.validatorsService.isPasswordConfirm }
    )
  }

}
