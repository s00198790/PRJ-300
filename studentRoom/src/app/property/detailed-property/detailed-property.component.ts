import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { PropertyService } from 'src/app/services/property.service';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { DocumentReference } from 'firebase/firestore';
>>>>>>> Frontend_Redesign

@Component({
  selector: 'app-detailed-property',
  templateUrl: './detailed-property.component.html',
  styleUrls: ['./detailed-property.component.scss']
})
export class DetailedPropertyComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
  }

}
=======
  currentProperty: any;

  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.currentProperty = JSON.parse(localStorage.getItem('currentPropertyListing'));
    console.log(this.currentProperty);
  }

}
>>>>>>> Frontend_Redesign
