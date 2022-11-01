import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguratorComponent } from './configurator.component';
import { ConfigHeaderComponent } from './components/config-header/config-header.component';
import { ConfigFooterComponent } from './components/config-footer/config-footer.component';
import { FrameComponent } from './components/frame/frame.component';
import { SharedModule } from '@shared/shared.module';
import { CardPartComponent } from './components/card-part/card-part.component';
import { ConfiguratorRoutingModule } from './configurator.routing.module';

const COMPONENTS = [
  ConfiguratorComponent,
  ConfigHeaderComponent,
  ConfigFooterComponent,
  FrameComponent,
  CardPartComponent,
];

const MODULES = [CommonModule, SharedModule, ConfiguratorRoutingModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
})
export class ConfiguratorModule {}
