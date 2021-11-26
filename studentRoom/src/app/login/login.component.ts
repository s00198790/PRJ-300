import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  title = 'studentRoom';
  isSignedIn=false
  constructor(public firebase : FirebaseService){}
  ngOnInit(){
    if(localStorage.getItem('user')!==null)
    this.isSignedIn= true
    else
    this.isSignedIn=false
  }
  async onSignup(email:string,password:string){
    await this.firebase.signup(email,password)
    if(this.firebase.isLoggedIn)
    this.isSignedIn=true
  }
  async onSignin(email:string,password:string){
    await this.firebase.signup(email,password)
    if(this.firebase.isLoggedIn)
    this.isSignedIn=true
  }
  handleLogout(){
    this.isSignedIn=false
    
  }

}
