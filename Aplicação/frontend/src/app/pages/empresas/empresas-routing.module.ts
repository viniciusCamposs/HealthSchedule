import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmpresasEdicaoComponent } from './empresas-edicao/empresas-edicao.component';
import { EmpresasComponent } from './empresas/empresas.component';

const routes: Routes = [
  {
    path: '',
    component: EmpresasComponent,
    children: [{ path: 'edicao', component: EmpresasEdicaoComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpresasRoutingModule {}
