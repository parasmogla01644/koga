import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';
import { ColorSketchModule } from 'ngx-color/sketch';
import { ProductPriceInfoComponent } from './product-price-info/product-price-info.component';
import { HeaderComponent } from './header/header.component';
import { UspComponent } from './usp/usp.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ModalComponent } from './modal/modal.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { ErrorMsgComponent } from './components/error-msg/error-msg.component';
import { DigitOnlyDirective } from './directives/digit-only.directive';

const MODULES = [NgbModule, ColorPickerModule, ColorSketchModule];

const COMPONENTS = [
  ProductPriceInfoComponent,
  HeaderComponent,
  UspComponent,
  ProductCardComponent,
  ModalComponent,
  LanguageSelectorComponent,
  ErrorMsgComponent,
];

const DIRECTIVES = [DigitOnlyDirective];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  imports: [CommonModule, ...MODULES],
  exports: [...MODULES, ...COMPONENTS, ...DIRECTIVES],
})
export class SharedModule {}
