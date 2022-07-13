import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lesson04Component } from './lesson04/lesson04.component';
import { SearchPipe } from './lesson04/search.pipe';
import { SortPipe } from './lesson04/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Lesson04Component,
    SearchPipe,
    SortPipe,
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
