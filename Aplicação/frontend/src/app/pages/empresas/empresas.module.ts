import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { EmpresasEdicaoComponent } from './empresas-edicao/empresas-edicao.component';
import { EmpresasRoutingModule } from './empresas-routing.module';
import { EmpresasComponent } from './empresas/empresas.component';



@NgModule({
  declarations: [
    EmpresasComponent,
    EmpresasEdicaoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppMaterialModule,
    EmpresasRoutingModule
  ],
  exports: [
    EmpresasComponent,
    EmpresasEdicaoComponent
  ]
})
export class EmpresasModule { }
