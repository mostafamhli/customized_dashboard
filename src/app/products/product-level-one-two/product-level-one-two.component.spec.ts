import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLevelOneTwoComponent } from './product-level-one-two.component';

describe('ProductLevelOneTwoComponent', () => {
  let component: ProductLevelOneTwoComponent;
  let fixture: ComponentFixture<ProductLevelOneTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductLevelOneTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductLevelOneTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
