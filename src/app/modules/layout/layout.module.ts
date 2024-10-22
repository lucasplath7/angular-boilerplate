import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppFooter } from './components/app-footer/app-footer.component';
import { AppBanner } from './components/app-banner/app-banner.component';
import { AppMainContent } from './components/app-main-content/app-main-content.component';
import { AppNav } from './components/app-nav/app-nav.component';

@NgModule({
  declarations: [
    AppFooter,
    AppBanner,
    AppMainContent,
    AppNav
  ],
  imports: [
    RouterModule
  ],
  exports: [
    AppFooter,
    AppBanner,
    AppMainContent,
    AppNav
  ],
  providers: [],
  bootstrap: []
})
export class LayoutModule { }