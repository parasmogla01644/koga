import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';
import { ColorSketchModule } from 'ngx-color/sketch';
import { ProductPriceInfoComponent } from './product-price-info/product-price-info.component';
import { HeaderComponent } from './header/header.component';
import { UspComponent } from './usp/usp.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { LanguageComponent } from './language/language.component';

const MODULES = [NgbModule, ColorPickerModule, ColorSketchModule];

@NgModule({
  declarations: [
    ProductPriceInfoComponent,
    HeaderComponent,
    UspComponent,
    ProductCardComponent,
    LanguageComponent
  ],
  imports: [CommonModule, ...MODULES],
  exports: [MODULES, ProductPriceInfoComponent, HeaderComponent, UspComponent, ProductCardComponent, LanguageComponent],
})
export class SharedModule {}
