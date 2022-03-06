import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosEdicaoComponent } from './usuarios-edicao/usuarios-edicao.component';



@NgModule({
  declarations: [
    UsuariosComponent,
    UsuariosEdicaoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsuariosModule { }
