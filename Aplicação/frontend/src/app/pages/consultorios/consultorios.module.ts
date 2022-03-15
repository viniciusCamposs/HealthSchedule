import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { SharedModule } from './../../shared/shared.module';
import { ConsultoriosEdicaoComponent } from './consultorios-edicao/consultorios-edicao.component';
import { ConsultoriosRoutingModule } from './consultorios-routing.module';
import { ConsultoriosComponent } from './consultorios/consultorios.component';



@NgModule({
  declarations: [
    ConsultoriosComponent,
    ConsultoriosEdicaoComponent
  ],
  imports: [
    CommonModule,
    ConsultoriosRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class ConsultoriosModule { }
