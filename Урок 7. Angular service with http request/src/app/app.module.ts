import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    AdminBlogComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
