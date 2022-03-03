import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PropertyService } from 'src/app/services/property.service';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  imageList: any[];
  rowIndexArray: any[];

  constructor(private service: PropertyService, public router: Router) {}

  openListing() {
    this.router.navigate(['property']);
  }

  ngOnInit(): void {
    this.service.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.imageList = list.map(item => {return item.payload.val();});
        this.rowIndexArray = Array.from(Array(Math.ceil(this.imageList.length / 3)).keys());
      }
    );
  }

}