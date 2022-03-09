import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from '../services/property.service';

interface Listing {
  payload: any;
  id: string;
}

@Component({
  selector: 'app-property-list-item',
  templateUrl: './property-list-item.component.html',
  styleUrls: ['./property-list-item.component.scss']
})
export class PropertyListItemComponent implements OnInit {
  @Input()
  listing: Listing;

  constructor(public router: Router, private propertyService: PropertyService) { }

  ngOnInit(): void {
  }

  openListing(listing: Listing) {
    localStorage.setItem('currentPropertyListing', JSON.stringify(listing));
    this.router.navigate(['property']);
  }

}
