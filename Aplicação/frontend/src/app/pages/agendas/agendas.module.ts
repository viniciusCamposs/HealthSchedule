import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '@root/shared/modules/app-material.module';
import { SharedModule } from '@root/shared/shared.module';

import { AgendaEdicaoComponent } from './agenda-edicao/agenda-edicao.component';
import { AgendasRoutingModule } from './agendas-routing.module';
import { AgendasComponent } from './agendas/agendas.component';
import { ItemAgendaComponent } from './item-agenda/item-agenda.component';



@NgModule({
  declarations: [
    AgendasComponent,
    AgendaEdicaoComponent,
    ItemAgendaComponent
  ],
  imports: [
    CommonModule,
    AgendasRoutingModule,
    AppMaterialModule,
    SharedModule,
  ]
})
export class AgendasModule { }
