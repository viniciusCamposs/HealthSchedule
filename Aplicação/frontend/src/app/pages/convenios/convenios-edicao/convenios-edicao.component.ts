import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convenios-edicao',
  templateUrl: './convenios-edicao.component.html',
  styleUrls: ['./convenios-edicao.component.scss']
})
export class ConveniosEdicaoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  clickClose(): void {
    this.router.navigate(['convenios']);
  }

}
