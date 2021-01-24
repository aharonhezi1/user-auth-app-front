import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  confirmPassword:string
isSignupMode:boolean
isLoading:boolean

  constructor() { }
  isPasswordconfirm(f){
    if (!this.isSignupMode) return true;
    return !f.value.password || this.confirmPassword === f.value.password;
  }
onChangeMode(){
  this.isSignupMode=!this.isSignupMode
}
onSubmit(form){
console.log(form.value);

}
  ngOnInit(): void {
  }

}
