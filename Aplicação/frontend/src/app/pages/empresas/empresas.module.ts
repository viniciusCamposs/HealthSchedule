import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { EmpresasComponent } from './empresas/empresas.component';
import { EmpresasEdicaoComponent } from './empresas-edicao/empresas-edicao.component';



@NgModule({
  declarations: [
    EmpresasComponent,
    EmpresasEdicaoComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class EmpresasModule { }
