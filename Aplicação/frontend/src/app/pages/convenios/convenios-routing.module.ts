import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConveniosEdicaoComponent } from './convenios-edicao/convenios-edicao.component';
import { ConveniosComponent } from './convenios/convenios.component';

const routes: Routes = [
  {
    path: '',
    component: ConveniosComponent,
  },
  {
    path: 'edicao',
    component: ConveniosEdicaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConveniosRoutingModule {}
