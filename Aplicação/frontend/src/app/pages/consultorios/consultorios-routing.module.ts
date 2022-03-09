import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsultoriosEdicaoComponent } from './consultorios-edicao/consultorios-edicao.component';
import { ConsultoriosComponent } from './consultorios/consultorios.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultoriosComponent,
    children: [{ path: 'edicao', component: ConsultoriosEdicaoComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ConsultoriosRoutingModule {}
