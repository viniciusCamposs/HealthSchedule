import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConveniosComponent } from './convenios/convenios.component';
import { ConveniosEdicaoComponent } from './convenios-edicao/convenios-edicao.component';



@NgModule({
  declarations: [
    ConveniosComponent,
    ConveniosEdicaoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ConveniosModule { }
