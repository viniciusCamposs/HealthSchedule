import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() clickAddNewRegister = new EventEmitter<any>();
  @Output() clickRefresh = new EventEmitter<any>();
  @Output() clickClose = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
}
