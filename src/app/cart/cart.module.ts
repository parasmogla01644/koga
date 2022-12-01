import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ProductBlockComponent } from './components/product-block/product-block.component';
import { ProductPartsComponent } from './components/product-parts/product-parts.component';

const routes: Routes = [
  {
    path: '',
    component: CartComponent,
  },
];

const COMPONENTS = [
  CartComponent,
  ProductBlockComponent,
  ProductPartsComponent,
];

const MODULES = [CommonModule, SharedModule, RouterModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [RouterModule.forChild(routes), ...MODULES],
})
export class CartModule {}
