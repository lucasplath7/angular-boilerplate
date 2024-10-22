import { NgModule } from '@angular/core';

import { AppSpinner } from './components/app-spinner/app-spinner.component';
import { AppTable } from './components/app-table/app-table.component';

@NgModule({
  declarations: [
    AppSpinner,
    AppTable
  ],
  imports: [
    
  ],
  exports: [
    AppSpinner,
    AppTable
  ],
  providers: [],
  bootstrap: []
})
export class BasicsModule { }