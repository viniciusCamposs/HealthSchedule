import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-especialidades-edicao',
  templateUrl: './especialidades-edicao.component.html',
  styleUrls: ['./especialidades-edicao.component.scss']
})
export class EspecialidadesEdicaoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  clickClose(): void {
    this.router.navigate(['especialidades']);
  }
}
