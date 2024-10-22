import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMainContent } from './modules/layout/components/app-main-content/app-main-content.component';
import { AppHome } from './modules/app-home/app-home.component';
import { AppSpinner } from './modules/basics/components/app-spinner/app-spinner.component';
import { AppHomeModule } from './modules/app-home/app-home.module';

const routes: Routes = [
  {
    path: '',
    component: AppMainContent,
    children: [
      {
        path: '',
        title: 'Home',
        component: AppHome,
      },
      {
        path: 'spinner',
        title: 'Spinner',
        component: AppSpinner,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AppHomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
