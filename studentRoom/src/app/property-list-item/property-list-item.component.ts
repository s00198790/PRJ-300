import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PropertyService } from '../services/property.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';

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
  private basePath = '/uploads';

  constructor(public router: Router, private propertyService: PropertyService, private db: AngularFireDatabase, private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  openListing(listing: Listing) {
    localStorage.setItem('currentPropertyListing', JSON.stringify(listing));
    this.router.navigate(['property']);
  }

  deleteListing(listing: Listing): void {
    this.deleteFileDatabase(listing.id)
      .then(() => {
        this.deleteFileStorage(listing.payload);
      })
      .catch(error => console.log(error));
      console.log(listing.id);
  }

  private deleteFileDatabase(id : string) {
    return this.db.list('imageDetails').remove(id);
  }
  private deleteFileStorage(payload : string): void {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(payload).delete();
  }

}
