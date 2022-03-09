import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { AppMaterialModule } from './modules/app-material.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, AppMaterialModule, ReactiveFormsModule, RouterModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
