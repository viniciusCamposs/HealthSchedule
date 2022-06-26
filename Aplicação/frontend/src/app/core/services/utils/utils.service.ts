import { Injectable } from '@angular/core';

import { Gender } from './../../../shared/models/Gender';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private genders = [
    { name: 'Masculino', initial: 'M' },
    { name: 'Feminino', initial: 'F' },
    { name: 'Outros', initial: 'O' }
  ];

  constructor() { }

  getGenders(): Gender[] {
    return this.genders;
  }
}
