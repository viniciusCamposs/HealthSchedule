import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UtilsService } from '@root/core/services/utils/utils.service';
import { Gender } from '@root/shared/models/Gender';

@Component({
  selector: 'app-medicos-edicao',
  templateUrl: './medicos-edicao.component.html',
  styleUrls: ['./medicos-edicao.component.scss']
})
export class MedicosEdicaoComponent implements OnInit {

  public genders: Gender[] = [];

  constructor(
    private router: Router,
    private utilsService: UtilsService
  ) { }

  ngOnInit(): void {
    this.genders = this.utilsService.getGenders();
  }

  clickClose(): void {
    this.router.navigate(['medicos']);
  }
}
