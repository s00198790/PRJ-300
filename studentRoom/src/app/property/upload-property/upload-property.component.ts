import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-upload-property',
  templateUrl: './upload-property.component.html',
  styleUrls: ['./upload-property.component.scss']
})
export class UploadPropertyComponent implements OnInit {

  imgSrc: string = '/assets/img/Placeholder.jpg';
  selectedImage: any = null;
  isSubmitted: boolean = false;

formTemplate = new FormGroup({
  shortDesc: new FormControl('',Validators.required),
  price: new FormControl('',Validators.required),
  location: new FormControl('',Validators.required),
  imageUrl: new FormControl('',Validators.required)
}) 

  constructor(private storage:AngularFireStorage, private service:PropertyService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  showPreview(event: any){
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload = (e:any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else {
      this.imgSrc = '/assets/img/Placeholder.jpg';
      this.selectedImage = null;
    }
  }

  onSubmit(formValue: any) {
    this.isSubmitted = true;
    if(this.formTemplate.valid){
      var filePath = `${formValue.category}/${this.selectedImage.name.split}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(()=>{
          fileRef.getDownloadURL().subscribe((url)=>{
            formValue['imageUrl']=url;
            this.service.insertImageDetails(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  get form() {
    return this.formTemplate.controls;
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      shortDesc: '',
      price: '',
      location:'',
      imageUrl:''
    });
    this.imgSrc = '/assets/img/Placeholder.jpg';
    this.selectedImage = null;
    this.isSubmitted=false;
  }
}