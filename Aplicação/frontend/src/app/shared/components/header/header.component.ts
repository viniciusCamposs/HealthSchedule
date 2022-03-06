import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public redirecionarRota(rota: string): void {
    if (rota === 'pacientes') {
      this.router.navigate(['pacientes']);
    } else if (rota === 'medicos') {
      this.router.navigate(['medicos']);
    } else if (rota === 'especialidades') {
      this.router.navigate(['especialidades']);
    } else if (rota === 'tipos_agendamento') {
      this.router.navigate(['tipos-agendamento']);
    } else if (rota === 'convenios') {
      this.router.navigate(['convenios']);
    } else if (rota === 'consultorios') {
      this.router.navigate(['consultorios']);
    } else if (rota === 'empresas') {
      this.router.navigate(['empresas']);
    } else if (rota === 'login') {
      this.router.navigate(['']);
    } else {
      this.router.navigate(['#']);
    }
  }

}
