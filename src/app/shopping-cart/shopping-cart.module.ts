import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartWrapperComponent } from './shopping-cart-wrapper/shopping-cart-wrapper.component';
import { ProductPriceInfoComponent } from './product-price-info/product-price-info.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { ProductBlockComponent } from './product-block/product-block.component';
import { HeaderComponent } from './header/header.component';
import { UspComponent } from './usp/usp.component';
import { ProductPartsComponent } from './product-parts/product-parts.component';

const routes: Routes = [
    {
        path: '',
        component: ShoppingCartWrapperComponent
    }
]

@NgModule({
  declarations: [
    ShoppingCartWrapperComponent,
    ProductPriceInfoComponent,
    ProductBlockComponent,
    HeaderComponent,
    UspComponent,
    ProductPartsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ShoppingCartModule { }
