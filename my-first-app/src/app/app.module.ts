import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Required for template driven form
    ReactiveFormsModule // Required for reactive form
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
