import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartWrapperComponent } from './shopping-cart-wrapper/shopping-cart-wrapper.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { ProductBlockComponent } from './product-block/product-block.component';
import { UspComponent } from './usp/usp.component';
import { ProductPartsComponent } from './product-parts/product-parts.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
    {
        path: '',
        component: ShoppingCartWrapperComponent
    }
]
@NgModule({
  declarations: [
    ShoppingCartWrapperComponent,
    ProductBlockComponent,
    UspComponent,
    ProductPartsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ShoppingCartModule { }
