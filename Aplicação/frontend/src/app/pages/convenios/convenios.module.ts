import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { ConveniosEdicaoComponent } from './convenios-edicao/convenios-edicao.component';
import { ConveniosRoutingModule } from './convenios-routing.module';
import { ConveniosComponent } from './convenios/convenios.component';



@NgModule({
  declarations: [
    ConveniosComponent,
    ConveniosEdicaoComponent
  ],
  imports: [
    CommonModule,
    ConveniosRoutingModule,
    SharedModule
  ]
})
export class ConveniosModule { }
