import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { SharedModule } from './../../shared/shared.module';
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
    UsuariosRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class UsuariosModule { }
