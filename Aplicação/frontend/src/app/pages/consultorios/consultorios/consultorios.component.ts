import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Consultorio } from '@root/shared/models/Consultorio';

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

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  newClinic(): void {
    this.router.navigate(['edicao'], { relativeTo: this.route });
  }

  close(): void {
    this.router.navigate(['home']);
  }
}
