import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private firestore: AngularFirestore) {

  }

  ngOnInit(): void {
  }
  logout(): void {
    this.afAuth.signOut();
}

}
