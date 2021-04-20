import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login-v2',
  templateUrl: './login-v2.component.html',
  styleUrls: ['./login-v2.component.scss']
})
export class LoginV2Component implements OnInit {

  isLoading: boolean
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }





  onSubmit() {
    this.isLoading = true;
    console.log(this.loginForm.value);

    this.apiService.login(this.loginForm.value).subscribe((res: any) => {
      console.log(res);
      this.isLoading = false

    }, (e) => {
      console.log(e);
      this.isLoading = false

    })
  }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(2)]]
    })
  }

}
