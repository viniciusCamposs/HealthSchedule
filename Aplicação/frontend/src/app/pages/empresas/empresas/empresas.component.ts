import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from 'src/app/shared/models/Empresa';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})
export class EmpresasComponent implements OnInit {

  public colunas: string[] = ['id', 'nome', 'cnpj', 'ativo'];
  public empresas: Empresa[] = [
    { id: 1, nome: 'MKDATA', cnpj: '1203213-233', ativo: true},
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  public newEnterprise(): void {
    this.router.navigate(['edicao'], { relativeTo: this.route });
  }

  close(): void {
    this.router.navigate(['home']);
  }
}
