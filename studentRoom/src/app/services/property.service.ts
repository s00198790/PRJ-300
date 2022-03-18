import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

<<<<<<< HEAD
imageDetailList: AngularFireList<any>;
=======
  imageDetailList: AngularFireList<any>;
>>>>>>> Frontend_Redesign

  constructor(private firebase:AngularFireDatabase) { }

  getImageDetailsList(){
    this.imageDetailList = this.firebase.list('imageDetails');
  }

  insertImageDetails(imageDetails: any) {
    this.imageDetailList.push(imageDetails);
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> Frontend_Redesign
