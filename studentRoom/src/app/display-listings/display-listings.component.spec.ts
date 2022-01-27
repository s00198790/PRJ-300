import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayListingsComponent } from './display-listings.component';

describe('DisplayListingsComponent', () => {
  let component: DisplayListingsComponent;
  let fixture: ComponentFixture<DisplayListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayListingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
