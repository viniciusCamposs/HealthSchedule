import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-edicao',
  templateUrl: './usuarios-edicao.component.html',
  styleUrls: ['./usuarios-edicao.component.scss']
})
export class UsuariosEdicaoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  clickClose(): void {
    this.router.navigate(['usuarios']);
  }

}
