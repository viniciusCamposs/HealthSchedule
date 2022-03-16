import { Component, OnInit } from '@angular/core';

import { TipoAgendamento } from './../../../shared/models/TipoAgendamento';

@Component({
  selector: 'app-tipos-agendamento',
  templateUrl: './tipos-agendamento.component.html',
  styleUrls: ['./tipos-agendamento.component.scss']
})
export class TiposAgendamentoComponent implements OnInit {

  public colunas: string[] = ['id', 'nome', 'consulta', 'procedimento', 'ativo'];
  public tiposagendamentos: TipoAgendamento[] = [
    { id: 1, nome: 'Consulta em Consultório', consulta: true, procedimento: false, ativo: true },
    { id: 2, nome: 'Exame Renal', consulta: false, procedimento: true, ativo: false }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
