import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {
  SearchBarTelaDeCadastroComponent,
} from './components/search-bar-tela-de-cadastro/search-bar-tela-de-cadastro.component';
import { AppMaterialModule } from './modules/app-material.module';

@NgModule({
  declarations: [HeaderComponent, SearchBarTelaDeCadastroComponent, FooterComponent],
  imports: [CommonModule, AppMaterialModule, ReactiveFormsModule, RouterModule],
  exports: [HeaderComponent, SearchBarTelaDeCadastroComponent, FooterComponent],
})
export class SharedModule {}
