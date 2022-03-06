import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MedicosEdicaoComponent } from './medicos-edicao/medicos-edicao.component';
import { MedicosComponent } from './medicos/medicos.component';

const routes: Routes = [
  {
    path: '',
    component: MedicosComponent,
    children: [{ path: 'edicao', component: MedicosEdicaoComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpresasRoutingModule {}
