import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD
<<<<<<< HEAD:studentRoom/src/app/property/detailed-property/detailed-property.component.spec.ts
=======
>>>>>>> Frontend_Redesign
import { DetailedPropertyComponent } from './detailed-property.component';

describe('DetailedPropertyComponent', () => {
  let component: DetailedPropertyComponent;
  let fixture: ComponentFixture<DetailedPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedPropertyComponent ]
<<<<<<< HEAD
=======
import { UploadPropertyComponent } from './upload-property.component';

describe('UploadPropertyComponent', () => {
  let component: UploadPropertyComponent;
  let fixture: ComponentFixture<UploadPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadPropertyComponent ]
>>>>>>> Frontend_Redesign:studentRoom/src/app/property/upload-property/upload-property.component.spec.ts
=======
>>>>>>> Frontend_Redesign
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<< HEAD
<<<<<<< HEAD:studentRoom/src/app/property/detailed-property/detailed-property.component.spec.ts
    fixture = TestBed.createComponent(DetailedPropertyComponent);
=======
    fixture = TestBed.createComponent(UploadPropertyComponent);
>>>>>>> Frontend_Redesign:studentRoom/src/app/property/upload-property/upload-property.component.spec.ts
=======
    fixture = TestBed.createComponent(DetailedPropertyComponent);
>>>>>>> Frontend_Redesign
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
