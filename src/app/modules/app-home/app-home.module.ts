import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeService } from './services/home.service';

import { AppHome } from './app-home.component';

@NgModule({
  declarations: [
    AppHome
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppHome
  ],
  providers: [
    HomeService
  ]
})
export class AppHomeModule { }
