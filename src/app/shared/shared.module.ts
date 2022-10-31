import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const MODULES = [NgbModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...MODULES],
  exports: [MODULES],
})
export class SharedModule {}
