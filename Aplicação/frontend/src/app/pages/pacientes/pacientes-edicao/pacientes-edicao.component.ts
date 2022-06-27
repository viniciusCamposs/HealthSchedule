import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';
import { UtilsService } from '@root/core/services/utils/utils.service';
import { Gender } from '@root/shared/models/Gender';

@Component({
  selector: 'app-pacientes-edicao',
  templateUrl: './pacientes-edicao.component.html',
  styleUrls: ['./pacientes-edicao.component.scss']
})
export class PacientesEdicaoComponent implements OnInit {

  public genders: Gender[] = [];

  constructor(
    private router: Router,
    private dateAdapter: DateAdapter<Date>,
    private utilsService: UtilsService
  ) {
    this.dateAdapter.setLocale('en-GB');
  }

  ngOnInit(): void {
    this.genders = this.utilsService.getGenders();
  }

  clickClose(): void {
    this.router.navigate(['pacientes']);
  }

}
