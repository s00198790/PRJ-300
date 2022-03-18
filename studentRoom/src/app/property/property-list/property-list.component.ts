import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PropertyService } from 'src/app/services/property.service';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})


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
