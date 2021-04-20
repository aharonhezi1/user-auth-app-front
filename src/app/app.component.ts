import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
isSignupMode:boolean 

onChangeMode(){
  this.isSignupMode=!this.isSignupMode
}
}
