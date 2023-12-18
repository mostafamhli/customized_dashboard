import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLevelTwoOneComponent } from './product-level-two-one.component';

describe('ProductLevelTwoOneComponent', () => {
  let component: ProductLevelTwoOneComponent;
  let fixture: ComponentFixture<ProductLevelTwoOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductLevelTwoOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductLevelTwoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
