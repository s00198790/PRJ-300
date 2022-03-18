import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  constructor(private service: PropertyService) { }

  ngOnInit(): void {
    this.service.getImageDetailsList();
  }

<<<<<<< HEAD
}
=======
}
>>>>>>> Frontend_Redesign
