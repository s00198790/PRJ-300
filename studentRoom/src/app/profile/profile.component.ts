import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: Observable<any>;  

  constructor(public afAuth: AngularFireAuth, private firestore: AngularFirestore) {

  }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(user => {
              console.log('Dashboard: user', user);
      
              if (user) {
                  let emailLower = user.email.toLowerCase();
                  this.user = this.firestore.collection('users').doc(emailLower).valueChanges();
              }
          });
  }
  logout(): void {
    this.afAuth.signOut();
}

}

// user: Observable<any>;              // Example: store the user's info here (Cloud Firestore: collection is 'users', docId is the user's email, lower case)

// constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {
//     this.user = null;
// }

// ngOnInit(): void {
//     this.afAuth.authState.subscribe(user => {
//         console.log('Dashboard: user', user);

//         if (user) {
//             let emailLower = user.email.toLowerCase();
//             this.user = this.firestore.collection('users').doc(emailLower).valueChanges();
//         }
//     });
// }
