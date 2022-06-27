import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoAgendamento } from '@root/shared/models/TipoAgendamento';

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

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  newScheduleType(): void {
    this.router.navigate(['edicao'], { relativeTo: this.route });
  }

  close(): void {
    this.router.navigate(['home']);
  }
}
