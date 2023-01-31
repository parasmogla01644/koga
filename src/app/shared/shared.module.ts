import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';
import { ColorSketchModule } from 'ngx-color/sketch';
import { ProductPriceInfoComponent } from './components/product-price-info/product-price-info.component';
import { HeaderComponent } from './header/header.component';
import { UspComponent } from './components/usp/usp.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ModalComponent } from './components/modal/modal.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { ErrorMsgComponent } from './components/error-msg/error-msg.component';
import { DigitOnlyDirective } from './directives/digit-only.directive';
import { SelectComponent } from './components/select/select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ClickOutsideDirective } from './directives/outsideClick.directive';

const MODULES = [
  NgbModule,
  ColorPickerModule,
  ColorSketchModule,
  ReactiveFormsModule,
  FormsModule,
];

const COMPONENTS = [
  ProductPriceInfoComponent,
  HeaderComponent,
  UspComponent,
  ProductCardComponent,
  ModalComponent,
  LanguageSelectorComponent,
  ErrorMsgComponent,
  SelectComponent,
  ContactFormComponent,
];

const DIRECTIVES = [DigitOnlyDirective, ClickOutsideDirective ];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  imports: [CommonModule, ...MODULES],
  exports: [...MODULES, ...COMPONENTS, ...DIRECTIVES],
})
export class SharedModule {}
