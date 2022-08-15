import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesPrivacyComponent } from './cookies-privacy.component';

describe('CookiesPrivacyComponent', () => {
  let component: CookiesPrivacyComponent;
  let fixture: ComponentFixture<CookiesPrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookiesPrivacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookiesPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
