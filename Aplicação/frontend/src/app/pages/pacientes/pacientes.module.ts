import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

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
    PacientesRoutingModule
  ]
})
export class PacientesModule { }
