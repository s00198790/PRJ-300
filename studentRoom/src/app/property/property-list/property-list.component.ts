import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PropertyService } from 'src/app/services/property.service';
<<<<<<< HEAD
=======
import { Output, EventEmitter } from '@angular/core';
>>>>>>> Frontend_Redesign


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
<<<<<<< HEAD
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
=======


export class PropertyListComponent implements OnInit {

  @Output() detailedPropertyEvent = new EventEmitter<string>();

  imageList: any[];

  constructor(private service: PropertyService, public router: Router) {}

  ngOnInit(): void {
    this.service.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.imageList = list.map(item => {
          return { payload: item.payload.val(), id: item.key }
        }) // .filter(item => item.id == "-MxjIvMjhoJz_6EuZTzH"); - Filter by ID if needed
      }
    );
  }
}
>>>>>>> Frontend_Redesign
