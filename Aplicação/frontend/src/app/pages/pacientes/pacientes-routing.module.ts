import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PacientesEdicaoComponent } from './pacientes-edicao/pacientes-edicao.component';
import { PacientesComponent } from './pacientes/pacientes.component';

const routes: Routes = [
  {
    path: '',
    component: PacientesComponent,
    children: [{ path: 'edicao', component: PacientesEdicaoComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacientesRoutingModule {}
