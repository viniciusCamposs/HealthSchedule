import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from './app-material/app-material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
