import { Convenio } from './../../../shared/models/Convenio';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convenios',
  templateUrl: './convenios.component.html',
  styleUrls: ['./convenios.component.scss']
})
export class ConveniosComponent implements OnInit {

  public colunas: string[] = ['id', 'nome', 'cnpj', 'codigo', 'ativo'];
  public convenios: Convenio[] = [
    { id: 1, nome: 'Particular', cnpj: '1231231232', codigo: '12312312321', ativo: true },
    { id: 2, nome: 'Leve Saúde', cnpj: '6785676575', codigo: '54353454354', ativo: false }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
