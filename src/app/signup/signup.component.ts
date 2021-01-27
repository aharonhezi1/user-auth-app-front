import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  isLoading: boolean
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

  onSubmit(form){
    this.isLoading = true;
       console.log(form.value);
        this.apiService.createUser(form.value).subscribe((res: any) => {
          console.log(res);
          this.isLoading = false
        }, (e) => {
          console.log(e);
          this.isLoading = false
  
        })
      }
  
  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      name:['',[Validators.required, Validators.minLength(2)]],
      id:['',[Validators.required]],
      email:['',[Validators.required, Validators.email]],
      userName: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(2)]],
      confirmPassword:['',[Validators.required, Validators.minLength(2)]],
    
    })
  }

}
