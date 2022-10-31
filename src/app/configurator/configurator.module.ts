import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguratorComponent } from './configurator.component';
import { ConfigHeaderComponent } from './components/config-header/config-header.component';
import { ConfigFooterComponent } from './components/config-footer/config-footer.component';
import { RouterModule, Routes } from '@angular/router';
import { FrameComponent } from './components/frame/frame.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ConfiguratorComponent,
  },
];

const COMPONENTS = [
  ConfiguratorComponent,
  ConfigHeaderComponent,
  ConfigFooterComponent,
  FrameComponent,
];

const MODULES = [SharedModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, RouterModule.forChild(routes), ...MODULES],
})
export class ConfiguratorModule {}
