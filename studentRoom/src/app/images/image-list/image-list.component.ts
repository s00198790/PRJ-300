import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ImageService } from 'src/app/shared/image.service';


@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  imageList: any[];
  rowIndexArray: any[];

  constructor(private service: ImageService, public router: Router) {}

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
