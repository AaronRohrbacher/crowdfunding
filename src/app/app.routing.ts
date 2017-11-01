import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { AdminComponent } from './admin/admin.component';



const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'new',
    component: NewComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
