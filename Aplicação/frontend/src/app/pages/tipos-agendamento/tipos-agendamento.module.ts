import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiposAgendamentoComponent } from './tipos-agendamento/tipos-agendamento.component';
import { TiposAgendamentoEdicaoComponent } from './tipos-agendamento-edicao/tipos-agendamento-edicao.component';



@NgModule({
  declarations: [
    TiposAgendamentoComponent,
    TiposAgendamentoEdicaoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TiposAgendamentoModule { }
