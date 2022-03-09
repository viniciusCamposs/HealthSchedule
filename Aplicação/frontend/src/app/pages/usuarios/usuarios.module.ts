import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UsuariosEdicaoComponent } from './usuarios-edicao/usuarios-edicao.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';



@NgModule({
  declarations: [
    UsuariosComponent,
    UsuariosEdicaoComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
