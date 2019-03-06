import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NG coop';

  loginForm: FormGroup;
  pwInput: FormControl;
  userName: FormControl;

  constructor(private fb: FormBuilder, private user: UserService) {

  this.pwInput = new FormControl({value: '', disabled: true},Validators.minLength(3));
    this.userName = new FormControl('',Validators.required);

    this.loginForm = fb.group({
      userName: this.userName,
      pw: this.pwInput
    }); 
    
  }

  onSubmit() {
    console.log("login submitted :" + this.loginForm.value.userName);
    this.user.newUser(this.userName.value)
  }
 
}





