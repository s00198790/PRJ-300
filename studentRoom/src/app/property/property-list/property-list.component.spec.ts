import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD
=======
<<<<<<< HEAD:studentRoom/src/app/property/upload-property/upload-property.component.spec.ts
import { UploadPropertyComponent } from './upload-property.component';

describe('UploadPropertyComponent', () => {
  let component: UploadPropertyComponent;
  let fixture: ComponentFixture<UploadPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadPropertyComponent ]
=======
>>>>>>> Frontend_Redesign
import { PropertyListComponent } from './property-list.component';

describe('PropertyListComponent', () => {
  let component: PropertyListComponent;
  let fixture: ComponentFixture<PropertyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyListComponent ]
<<<<<<< HEAD
=======
>>>>>>> Frontend_Redesign:studentRoom/src/app/property/property-list/property-list.component.spec.ts
>>>>>>> Frontend_Redesign
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<< HEAD
    fixture = TestBed.createComponent(PropertyListComponent);
=======
<<<<<<< HEAD:studentRoom/src/app/property/upload-property/upload-property.component.spec.ts
    fixture = TestBed.createComponent(UploadPropertyComponent);
=======
    fixture = TestBed.createComponent(PropertyListComponent);
>>>>>>> Frontend_Redesign:studentRoom/src/app/property/property-list/property-list.component.spec.ts
>>>>>>> Frontend_Redesign
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
