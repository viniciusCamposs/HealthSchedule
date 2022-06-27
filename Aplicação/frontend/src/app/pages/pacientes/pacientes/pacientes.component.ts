import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '@root/shared/models/Paciente';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {

  public colunas: string[] = ['id', 'nome', 'email', 'sexo', 'dt_nasc', 'ativo'];
  public pacientes: Paciente[] = [
    { id: 1, nome: 'Vinicius Alves de Campos', email: 'vinicius@email.com', sexo: 'M', dt_nasc: '08/07/2000', ativo: true },
    { id: 2, nome: 'Matheus Augusto Gonçalves Satler', email: 'vinicius@email.com', sexo: 'M', dt_nasc: '04/02/1998', ativo: false },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  newPacient(): void {
    this.router.navigate(['edicao'], { relativeTo: this.route });
  }

  close(): void {
    this.router.navigate(['home']);
  }

}
