import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '@root/shared/modules/app-material.module';
import { SharedModule } from '@root/shared/shared.module';

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
    EspecialidadesRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class EspecialidadesModule { }
