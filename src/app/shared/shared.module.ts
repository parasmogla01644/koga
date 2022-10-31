import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';
import { ColorSketchModule } from 'ngx-color/sketch';

const MODULES = [NgbModule, ColorPickerModule, ColorSketchModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...MODULES],
  exports: [MODULES],
})
export class SharedModule {}
