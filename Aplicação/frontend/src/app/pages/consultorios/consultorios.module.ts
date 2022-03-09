import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

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
    ConsultoriosRoutingModule
  ]
})
export class ConsultoriosModule { }
