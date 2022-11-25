import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguratorComponent } from './configurator.component';

const routes: Routes = [
  {
    path: '',
    component: ConfiguratorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguratorRoutingModule {}
