import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturePickerComponent } from './picture-picker.component';

describe('PicturePickerComponent', () => {
  let component: PicturePickerComponent;
  let fixture: ComponentFixture<PicturePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicturePickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicturePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
