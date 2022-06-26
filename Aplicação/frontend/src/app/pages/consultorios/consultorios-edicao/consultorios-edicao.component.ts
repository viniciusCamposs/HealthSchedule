import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultorios-edicao',
  templateUrl: './consultorios-edicao.component.html',
  styleUrls: ['./consultorios-edicao.component.scss']
})
export class ConsultoriosEdicaoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  clickClose(): void {
    this.router.navigate(['consultorios']);
  }
}
