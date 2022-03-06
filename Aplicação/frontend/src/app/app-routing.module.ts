import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'usuarios',
    loadChildren: () =>
      import('./pages/usuarios/usuarios.module').then((m) => m.UsuariosModule),
  },
  {
    path: 'pacientes',
    loadChildren: () =>
      import('./pages/pacientes/pacientes.module').then(
        (m) => m.PacientesModule
      ),
  },
  {
    path: 'medicos',
    loadChildren: () =>
      import('./pages/medicos/medicos.module').then((m) => m.MedicosModule),
  },
  {
    path: 'especialidades',
    loadChildren: () =>
      import('./pages/especialidades/especialidades.module').then(
        (m) => m.EspecialidadesModule
      ),
  },
  {
    path: 'tipos-agendamento',
    loadChildren: () =>
      import('./pages/tipos-agendamento/tipos-agendamento.module').then(
        (m) => m.TiposAgendamentoModule
      ),
  },
  {
    path: 'convenios',
    loadChildren: () =>
      import('./pages/convenios/convenios.module').then(
        (m) => m.ConveniosModule
      ),
  },
  {
    path: 'consultorios',
    loadChildren: () =>
      import('./pages/consultorios/consultorios.module').then(
        (m) => m.ConsultoriosModule
      ),
  },
  {
    path: 'empresas',
    loadChildren: () =>
      import('./pages/empresas/empresas.module').then((m) => m.EmpresasModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
