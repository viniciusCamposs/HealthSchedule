import { Especialidade } from './../../../shared/models/Especialidade';
import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
