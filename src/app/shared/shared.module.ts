import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';
import { ColorSketchModule } from 'ngx-color/sketch';
import { BackHeaderComponent } from './back-header/back-header.component';

const MODULES = [NgbModule, ColorPickerModule, ColorSketchModule];

@NgModule({
  declarations: [
    BackHeaderComponent,
  ],
  imports: [CommonModule, ...MODULES],
  exports: [MODULES],
})
export class SharedModule {}
