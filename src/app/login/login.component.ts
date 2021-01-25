import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  confirmPassword:string
isSignupMode:boolean
isLoading:boolean

  constructor(private apiService: ApiService) { }
  isPasswordconfirm(f){
    if (!this.isSignupMode) return true;
    return !f.value.password || this.confirmPassword === f.value.password;
  }
onChangeMode(){
  this.isSignupMode=!this.isSignupMode
}
onSubmit(form){
  this.isLoading = true;
     console.log(form.value);
    if (this.isSignupMode) {
      this.apiService.createUser(form.value).subscribe((res: any) => {
        console.log(res);
        this.isLoading = false
      }, (e) => {
        console.log(e);
        this.isLoading = false

      })
    } else {
      this.apiService.login(form.value).subscribe((res: any) => {
        console.log(res);
        this.isLoading = false

      }, (e) => {
        console.log(e);
        this.isLoading = false

      })
    }
}
  ngOnInit(): void {
  }

}
