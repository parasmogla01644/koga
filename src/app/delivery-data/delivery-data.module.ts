import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryDataWrapperComponent } from './delivery-data-wrapper/delivery-data-wrapper.component';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryFormComponent } from './delivery-form/delivery-form.component';
import { SharedModule } from "../shared/shared.module";

const routes: Routes = [
    {
        path: '',
        component: DeliveryDataWrapperComponent
    }
]

@NgModule({
    declarations: [
        DeliveryDataWrapperComponent,
        DeliveryFormComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class DeliveryDataModule { }
