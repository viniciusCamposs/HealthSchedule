import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { TiposAgendamentoEdicaoComponent } from './tipos-agendamento-edicao/tipos-agendamento-edicao.component';
import { TiposAgendamentoRouting } from './tipos-agendamento-routing.module';
import { TiposAgendamentoComponent } from './tipos-agendamento/tipos-agendamento.component';



@NgModule({
  declarations: [
    TiposAgendamentoComponent,
    TiposAgendamentoEdicaoComponent
  ],
  imports: [
    CommonModule,
    TiposAgendamentoRouting,
    SharedModule
  ]
})
export class TiposAgendamentoModule { }
