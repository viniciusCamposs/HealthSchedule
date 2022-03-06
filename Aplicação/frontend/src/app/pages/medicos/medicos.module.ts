import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicosEdicaoComponent } from './medicos-edicao/medicos-edicao.component';



@NgModule({
  declarations: [
    MedicosComponent,
    MedicosEdicaoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MedicosModule { }
