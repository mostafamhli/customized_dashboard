import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductLevelOneTwoComponent } from './product-level-one-two/product-level-one-two.component';
import { ProductLevelTwoOneComponent } from './product-level-two-one/product-level-two-one.component';
import { ProductLevelThreeOneComponent } from './product-level-three-one/product-level-three-one.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductLevelOneTwoComponent,
    ProductLevelTwoOneComponent,
    ProductLevelThreeOneComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
