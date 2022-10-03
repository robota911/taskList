import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';
// import { MainComponent } from './main/main.component';

const routes: Routes = [
  // {path: '', component: MainComponent },
  {path: 'admin', component: AdminBlogComponent },
  {path: 'blog', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
