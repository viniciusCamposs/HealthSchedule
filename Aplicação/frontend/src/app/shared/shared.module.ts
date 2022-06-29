import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {
  SearchBarComponent,
} from './components/search-bar/search-bar.component';
import { AppMaterialModule } from './modules/app-material.module';

@NgModule({
  declarations: [HeaderComponent, SearchBarComponent, FooterComponent],
  imports: [CommonModule, AppMaterialModule, ReactiveFormsModule, RouterModule],
  exports: [HeaderComponent, SearchBarComponent, FooterComponent],
})
export class SharedModule {}
