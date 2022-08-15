import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseContentComponent } from './purchase-content.component';

describe('PurchaseContentComponent', () => {
  let component: PurchaseContentComponent;
  let fixture: ComponentFixture<PurchaseContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
