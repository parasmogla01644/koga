import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';
import { ColorSketchModule } from 'ngx-color/sketch';
import { ProductPriceInfoComponent } from './product-price-info/product-price-info.component';
import { HeaderComponent } from './header/header.component';

const MODULES = [NgbModule, ColorPickerModule, ColorSketchModule];

@NgModule({
  declarations: [
    ProductPriceInfoComponent,
    HeaderComponent
  ],
  imports: [CommonModule, ...MODULES],
  exports: [MODULES, ProductPriceInfoComponent, HeaderComponent],
})
export class SharedModule {}
