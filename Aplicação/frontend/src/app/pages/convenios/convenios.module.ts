import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '@root/shared/modules/app-material.module';
import { SharedModule } from '@root/shared/shared.module';

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
    AppMaterialModule,
    SharedModule
  ]
})
export class ConveniosModule { }
