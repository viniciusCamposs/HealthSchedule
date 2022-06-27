import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Especialidade } from './../../../shared/models/Especialidade';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.scss']
})
export class EspecialidadesComponent implements OnInit {

  public colunas: string[] = ['id', 'nome', 'ativo'];
  public especialidades: Especialidade[] = [
    { id: 1, nome: 'Cardiologia', ativo: true },
    { id: 2, nome: 'Reumatologia', ativo: false }
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  newSpeciality(): void {
    this.router.navigate(['edicao'], { relativeTo: this.route });
  }

  close(): void {
    this.router.navigate(['home']);
  }
}
