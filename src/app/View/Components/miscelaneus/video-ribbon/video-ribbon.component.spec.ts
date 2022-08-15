import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoRibbonComponent } from './video-ribbon.component';

describe('VideoRibbonComponent', () => {
  let component: VideoRibbonComponent;
  let fixture: ComponentFixture<VideoRibbonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoRibbonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoRibbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
