import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar-tela-de-cadastro',
  templateUrl: './search-bar-tela-de-cadastro.component.html',
  styleUrls: ['./search-bar-tela-de-cadastro.component.scss']
})
export class SearchBarTelaDeCadastroComponent implements OnInit {

  @Output() add: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addRegister(): void {
    this.add.emit();
  }

}
