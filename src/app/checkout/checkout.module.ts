import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { UserFormComponent } from './components/user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeDeliveryComponent } from './components/home-delivery/home-delivery.component';
import { PickupComponent } from './components/pickup/pickup.component';

const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
  },
];

const COMPONENTS = [
  CheckoutComponent,
  UserFormComponent,
  HomeDeliveryComponent,
  PickupComponent,
];

const MODULES = [
  CommonModule,
  SharedModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [RouterModule.forChild(routes), ...MODULES],
})
export class CheckoutModule {}
