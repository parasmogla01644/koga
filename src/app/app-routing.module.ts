import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./configurator/configurator.module').then(
        (m) => m.ConfiguratorModule
      ),
  },
  {
    path: 'cart-details',
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./checkout/checkout.module').then((m) => m.CheckoutModule),
  },
  {
    path: 'delivery-data',
    loadChildren: () =>
      import('./delivery-data/delivery-data.module').then(
        (m) => m.DeliveryDataModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
