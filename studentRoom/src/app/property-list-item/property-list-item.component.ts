import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { PropertyService } from '../services/property.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { stringify } from 'querystring';

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

  constructor(public router: Router, private propertyService: PropertyService, private db: AngularFireDatabase, private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  // openListing(listing: Listing) {
  //   localStorage.setItem('currentPropertyListing', JSON.stringify(listing));
  //   this.router.navigate(['property']);
  // }

  deleteListing(listing: Listing): void {
    this.deleteFileDatabase(listing.id)
      .then(() => {
        // this.deleteFileStorage(listing.payload);
      })
      .catch(error => console.log(error));
  }

  private deleteFileDatabase(id : string) {
    return this.db.list('imageDetails').remove(id);
  }

  openListing(listing: Listing) {
    // localStorage.setItem('currentPropertyListing', JSON.stringify(listing));
    this.router.navigate(['property/'], {
      queryParams: { 'id': listing.id }
    });
  }
}
