import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesComponent } from './pacientes/pacientes.component';
import { PacientesEdicaoComponent } from './pacientes-edicao/pacientes-edicao.component';



@NgModule({
  declarations: [
    PacientesComponent,
    PacientesEdicaoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PacientesModule { }
