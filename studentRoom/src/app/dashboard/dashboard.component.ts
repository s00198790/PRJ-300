import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }
  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
  }

}
