import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EspecialidadesEdicaoComponent } from './especialidades-edicao/especialidades-edicao.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';

const routes: Routes = [
  {
    path: '',
    component: EspecialidadesComponent,
    children: [{ path: 'edicao', component: EspecialidadesEdicaoComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspecialidadesRoutingModule {}
