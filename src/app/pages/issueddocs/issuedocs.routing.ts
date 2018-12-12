import { Routes, RouterModule } from '@angular/router';
import { AdvComponent } from './issuedocs.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: AdvComponent

  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
