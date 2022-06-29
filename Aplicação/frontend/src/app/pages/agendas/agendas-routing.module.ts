import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgendaEdicaoComponent } from './agenda-edicao/agenda-edicao.component';
import { AgendasComponent } from './agendas/agendas.component';

const routes: Routes = [
  {
    path: '',
    component: AgendasComponent,
  },
  {
    path: 'edicao',
    component: AgendaEdicaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AgendasRoutingModule {}
