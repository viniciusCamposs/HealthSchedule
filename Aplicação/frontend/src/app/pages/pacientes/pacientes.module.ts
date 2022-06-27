import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '@root/shared/modules/app-material.module';
import { SharedModule } from '@root/shared/shared.module';
import { PacientesEdicaoComponent } from './pacientes-edicao/pacientes-edicao.component';
import { PacientesRoutingModule } from './pacientes-routing.module';
import { PacientesComponent } from './pacientes/pacientes.component';



@NgModule({
  declarations: [
    PacientesComponent,
    PacientesEdicaoComponent
  ],
  imports: [
    CommonModule,
    PacientesRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class PacientesModule { }
