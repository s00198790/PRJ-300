import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-detailed-property',
  templateUrl: './detailed-property.component.html',
  styleUrls: ['./detailed-property.component.scss']
})
export class DetailedPropertyComponent implements OnInit {

  currentProperty: any;

  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.currentProperty = JSON.parse(localStorage.getItem('currentPropertyListing'));
    console.log(this.currentProperty);
  }

}