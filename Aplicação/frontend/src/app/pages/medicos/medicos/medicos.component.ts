import { Component, OnInit } from '@angular/core';

import { Medico } from './../../../shared/models/Medico';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss']
})
export class MedicosComponent implements OnInit {

  public medicos: Medico[] = [
    { id: 1, nome: 'Vinicius Médico', crm: '123456', sexo: 'M', cpf: '41609125899', ativo: true },
    { id: 2, nome: 'Matheus Médico', crm: '654321', sexo: 'F', cpf: '44543856469', ativo: true },
  ];
  public colunas: string[] = ['id', 'nome', 'crm', 'sexo', 'cpf', 'ativo'];

  constructor() { }

  ngOnInit(): void {
  }

}
