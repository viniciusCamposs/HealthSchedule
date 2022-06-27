import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '@root/shared/modules/app-material.module';
import { SharedModule } from '@root/shared/shared.module';
import { MedicosEdicaoComponent } from './medicos-edicao/medicos-edicao.component';
import { MedicosRoutingModule } from './medicos-routing.module';
import { MedicosComponent } from './medicos/medicos.component';



@NgModule({
  declarations: [
    MedicosComponent,
    MedicosEdicaoComponent
  ],
  imports: [
    CommonModule,
    MedicosRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class MedicosModule { }
