import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
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
    SharedModule
  ]
})
export class MedicosModule { }
