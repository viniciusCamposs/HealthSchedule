import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { EspecialidadesEdicaoComponent } from './especialidades-edicao/especialidades-edicao.component';



@NgModule({
  declarations: [
    EspecialidadesComponent,
    EspecialidadesEdicaoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EspecialidadesModule { }
