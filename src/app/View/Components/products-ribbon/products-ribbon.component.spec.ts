import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsRibbonComponent } from './products-ribbon.component';

describe('ProductsRibbonComponent', () => {
  let component: ProductsRibbonComponent;
  let fixture: ComponentFixture<ProductsRibbonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsRibbonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsRibbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
