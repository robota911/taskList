import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { Lesson1Component } from './pages/logos/lesson1/lesson1.component';
import { Lesson2Component } from './pages/logos/lesson2/lesson2.component';
import { Lesson3Component } from './pages/logos/lesson3/lesson3.component';
import { LogosComponent } from './pages/logos/logos.component';
import { Lesson003Component } from './pages/logos/lesson3/lesson003/lesson003.component';


@NgModule({
  declarations: [
    
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Lesson1Component,
    Lesson2Component,
    Lesson3Component,
    HomeComponent,
    LogosComponent,
    Lesson003Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
