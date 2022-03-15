import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../shared/models/Usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  public usuarios: Usuario[] = [
    {id: 1, nome: 'Vinicius Alves de Campos', ativo: true},
    {id: 2, nome: 'Matheus Gonçalves Satler', ativo: false}
  ];

  public colunas: string[] = ['id', 'nome', 'ativo'];

  constructor() { }

  ngOnInit(): void {
  }

}
