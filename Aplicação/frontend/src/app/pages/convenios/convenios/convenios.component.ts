import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Convenio } from '@root/shared/models/Convenio';

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

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  newHealthInsurance(): void {
    this.router.navigate(['edicao'], { relativeTo: this.route });
  }

  close(): void {
    this.router.navigate(['home']);
  }
}
