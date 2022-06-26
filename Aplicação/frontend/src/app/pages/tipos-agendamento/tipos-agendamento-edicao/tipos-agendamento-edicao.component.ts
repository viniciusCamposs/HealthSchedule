import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipos-agendamento-edicao',
  templateUrl: './tipos-agendamento-edicao.component.html',
  styleUrls: ['./tipos-agendamento-edicao.component.scss']
})
export class TiposAgendamentoEdicaoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  clickClose(): void {
    this.router.navigate(['tipos-agendamento']);
  }

}
