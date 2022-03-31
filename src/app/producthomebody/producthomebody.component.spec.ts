import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducthomebodyComponent } from './producthomebody.component';

describe('ProducthomebodyComponent', () => {
  let component: ProducthomebodyComponent;
  let fixture: ComponentFixture<ProducthomebodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducthomebodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducthomebodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
