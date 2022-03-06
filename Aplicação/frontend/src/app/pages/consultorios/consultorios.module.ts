import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultoriosComponent } from './consultorios/consultorios.component';
import { ConsultoriosEdicaoComponent } from './consultorios-edicao/consultorios-edicao.component';



@NgModule({
  declarations: [
    ConsultoriosComponent,
    ConsultoriosEdicaoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ConsultoriosModule { }
