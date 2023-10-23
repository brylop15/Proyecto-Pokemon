import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './views/login/login.component';
import { RgisterComponent } from './views/rgister/rgister.component';
import { DashboardComponent } from './views/dashboard/dashboard.component'

const routes: Routes = [
  { path:'', redirectTo: '/login', pathMatch: 'full' },
  { path:'login', component:LoginComponent },
  { path:'rgister', component:RgisterComponent },
  { path:'dashboard', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
