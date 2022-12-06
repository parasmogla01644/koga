import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguratorComponent } from './configurator.component';
import { ConfigHeaderComponent } from './components/config-header/config-header.component';
import { ConfigFooterComponent } from './components/config-footer/config-footer.component';
import { FrameComponent } from './components/frame/frame.component';
import { SharedModule } from '@shared/shared.module';
import { CardPartComponent } from './components/card-part/card-part.component';
// import { ConfiguratorRoutingModule } from './configurator.routing.module';
import { FrameInfoComponent } from './components/frame-info/frame-info.component';
import { RouterModule, Routes } from '@angular/router';
import { GroupsetComponent } from './components/groupset/groupset.component';
import { WheelsComponent } from './components/wheels/wheels.component';
import { HandlebarsComponent } from './components/handlebars/handlebars.component';
import { SaddleComponent } from './components/saddle/saddle.component';
import { CarriersComponent } from './components/carriers/carriers.component';
import { LightningComponent } from './components/lightning/lightning.component';
import { AccessoiriesComponent } from './components/accessoiries/accessoiries.component';
import { SizeComponent } from './components/size/size.component';
import { SignatureComponent } from './components/signature/signature.component';
import { FrameSizeComponent } from './components/frame-size/frame-size.component';

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
  CardPartComponent,
  FrameInfoComponent,
  GroupsetComponent,
  WheelsComponent,
  HandlebarsComponent,
  SaddleComponent,
  CarriersComponent,
  LightningComponent,
  AccessoiriesComponent,
  SizeComponent,
];

const MODULES = [CommonModule, SharedModule, RouterModule];

@NgModule({
  declarations: [...COMPONENTS, SignatureComponent, FrameSizeComponent],
  imports: [RouterModule.forChild(routes), ...MODULES],
})
export class ConfiguratorModule {}
