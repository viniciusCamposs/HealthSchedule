import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpInterceptorService } from './core/authentication/http-interceptor.service';
import { ConsultoriosModule } from './pages/consultorios/consultorios.module';
import { ConveniosModule } from './pages/convenios/convenios.module';
import { EmpresasModule } from './pages/empresas/empresas.module';
import { EspecialidadesModule } from './pages/especialidades/especialidades.module';
import { HomeModule } from './pages/home/home.module';
import { LoginModule } from './pages/login/login.module';
import { MedicosModule } from './pages/medicos/medicos.module';
import { PacientesModule } from './pages/pacientes/pacientes.module';
import { TiposAgendamentoModule } from './pages/tipos-agendamento/tipos-agendamento.module';
import { UsuariosModule } from './pages/usuarios/usuarios.module';
import { AppMaterialModule } from './shared/modules/app-material.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    EmpresasModule,
    ConsultoriosModule,
    ConveniosModule,
    EspecialidadesModule,
    MedicosModule,
    RouterModule,
    PacientesModule,
    TiposAgendamentoModule,
    UsuariosModule,
    HomeModule,
    ReactiveFormsModule,
    FormsModule,
    AppMaterialModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
