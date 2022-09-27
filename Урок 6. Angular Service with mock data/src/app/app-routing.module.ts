import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';

import { AdminComponent } from './popap/admin/admin.component';
import { UserComponent } from './popap/user/user.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent},
  { path: 'user', component: UserComponent},
  { path: '', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
