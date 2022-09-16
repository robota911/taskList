import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LogosComponent } from './pages/logos/logos.component';
import { Lesson1Component } from './pages/logos/lesson1/lesson1.component';
import { Lesson2Component } from './pages/logos/lesson2/lesson2.component';
import { Lesson3Component } from './pages/logos/lesson3/lesson3.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  // { path: 'Logos', component: LogosComponent },

  { path: 'Logos', component: LogosComponent, children: [
    { path: 'Lesson1', component: Lesson1Component },
    { path: 'Lesson2', component: Lesson2Component },
    { path: 'Lesson3', component: Lesson3Component },
  ] },

  // { path: 'Lesson1', component: Lesson1Component },
  // { path: 'Lesson2', component: Lesson2Component },
  // { path: 'Lesson3', component: Lesson3Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
