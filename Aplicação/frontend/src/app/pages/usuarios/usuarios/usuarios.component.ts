import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Usuario } from '@root/shared/models/Usuario';

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

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  newUser(): void {
    this.router.navigate(['./edicao'], {relativeTo: this.route});
  }

  close(): void {
    this.router.navigate(['home']);
  }

}
