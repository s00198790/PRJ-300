import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    user$: Observable<User>;

    private updateUserData(user: { uid: any; }) {
        // Sets user data to firestore on login
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
        const data: User = {
          uid: user.uid,
          accountType: {
            admin: true
          }
        }
        return userRef.set(data, { merge: true })
      }
  
      private checkAuthorization(user:User, allowedRoles:string[]): boolean{
          if(!user) return false
          for (const role of allowedRoles) {
            //   if (user.accountType[role]) {
            //       return true
            //   }
          }

      }

  userLoggedIn: boolean;

  constructor(private router: Router, private afAuth: AngularFireAuth, private afs: AngularFirestore) {

    this.user$ = this.afAuth.authState
    .pipe(switchMap(user => {
        if(user) {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
        } else {
            return of(null)
        }
    }))
    

    this.userLoggedIn = false;

    this.afAuth.onAuthStateChanged((user) => {              // set up a subscription to always know the login status of the user
        if (user) {
            this.userLoggedIn = true;
        } else {
            this.userLoggedIn = false;
        }
    });
}
loginUser(email: string, password: string): Promise<any> {
  return this.afAuth.signInWithEmailAndPassword(email, password)
      .then(() => {
          console.log('Auth Service: loginUser: success');
          // this.router.navigate(['/dashboard']);
      })
      .catch(error => {
          console.log('Auth Service: login error...');
          console.log('error code', error.code);
          console.log('error', error);
          if (error.code)
              return { isValid: false, message: error.message };
      });
      
}

signupUser(user: any): Promise<any> {
  return this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
      .then((result) => {
          let emailLower = user.email.toLowerCase();

          this.afs.doc('/users/' + emailLower)                        // on a successful signup, create a document in 'users' collection with the new user's info
              .set({
                  accountType: 'endUser',
                  displayName: user.displayName,
                  displayName_lower: user.displayName.toLowerCase(),
                  email: user.email,
                  email_lower: emailLower
              });

              result.user.sendEmailVerification();                    // immediately send the user a verification email
      })
      .catch(error => {
          console.log('Auth Service: signup error', error);
          if (error.code)
              return { isValid: false, message: error.message };
      });
}

resetPassword(email: string): Promise<any> {
  return this.afAuth.sendPasswordResetEmail(email)
      .then(() => {
          console.log('Auth Service: reset password success');
          // this.router.navigate(['/amount']);
      })
      .catch(error => {
          console.log('Auth Service: reset password error...');
          console.log(error.code);
          console.log(error)
          if (error.code)
              return error;
      });
}

async resendVerificationEmail() {                         // verification email is sent in the Sign Up function, but if you need to resend, call this function
  return (await this.afAuth.currentUser).sendEmailVerification()
      .then(() => {
          // this.router.navigate(['home']);
      })
      .catch(error => {
          console.log('Auth Service: sendVerificationEmail error...');
          console.log('error code', error.code);
          console.log('error', error);
          if (error.code)
              return error;
      });
}

logoutUser(): Promise<void> {
  return this.afAuth.signOut()
      .then(() => {
          this.router.navigate(['/home']);                    // when we log the user out, navigate them to home
      })
      .catch(error => {
          console.log('Auth Service: logout error...');
          console.log('error code', error.code);
          console.log('error', error);
          if (error.code)
              return error;
      });
}

setUserInfo(payload: object) {
  console.log('Auth Service: saving user info...');
  this.afs.collection('users')
      .add(payload).then(function (res) {
          console.log("Auth Service: setUserInfo response...")
          console.log(res);
      })
}

getCurrentUser() {
  return this.afAuth.currentUser;                                 // returns user object for logged-in users, otherwise returns null 
}

}


