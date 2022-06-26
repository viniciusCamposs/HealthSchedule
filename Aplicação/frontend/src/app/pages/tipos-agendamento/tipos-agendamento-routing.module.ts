import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TiposAgendamentoEdicaoComponent } from './tipos-agendamento-edicao/tipos-agendamento-edicao.component';
import { TiposAgendamentoComponent } from './tipos-agendamento/tipos-agendamento.component';

const routes: Routes = [
  {
    path: '',
    component: TiposAgendamentoComponent,
  },
  {
    path: 'edicao',
    component: TiposAgendamentoEdicaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiposAgendamentoRouting {}
