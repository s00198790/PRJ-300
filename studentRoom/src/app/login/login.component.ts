import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    isSignedIn=false
    constructor(public firebaseService : FirebaseService){}

    ngOnInit(){
        if(localStorage.getItem('user')!== null)
        this.isSignedIn=true
        else
        this.isSignedIn=false
      }
      async onSignup(email:string,password:string){
        await this.firebaseService.signup(email,password)
        if(this.firebaseService.isLoggedIn)
        this.isSignedIn=true
      }
      async onSignin(email:string,password:string){
        await this.firebaseService.signup(email,password)
        if(this.firebaseService.isLoggedIn)
        this.isSignedIn=true
      }
      handleLogout(){
        this.isSignedIn = false
        
      }
}
