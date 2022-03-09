import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EspecialidadesEdicaoComponent } from './especialidades-edicao/especialidades-edicao.component';
import { EspecialidadesRoutingModule } from './especialidades-routing.module';
import { EspecialidadesComponent } from './especialidades/especialidades.component';



@NgModule({
  declarations: [
    EspecialidadesComponent,
    EspecialidadesEdicaoComponent
  ],
  imports: [
    CommonModule,
    EspecialidadesRoutingModule
  ]
})
export class EspecialidadesModule { }
