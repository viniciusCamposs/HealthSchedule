import { Component, OnInit } from '@angular/core';

import { Consultorio } from './../../../shared/models/Consultorio';

@Component({
  selector: 'app-consultorios',
  templateUrl: './consultorios.component.html',
  styleUrls: ['./consultorios.component.scss']
})
export class ConsultoriosComponent implements OnInit {

  public colunas: string[] = ['id', 'nome', 'ativo'];
  public consultorios: Consultorio[] = [
    { id: 1, nome: 'CONSULTORIO DO VINICIUS', ativo: true},
    { id: 2, nome: 'CONSULTORIO DO MATHEUS', ativo: false}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
