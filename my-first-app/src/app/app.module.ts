import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BasicHighlighterDirective } from './directives/app.basicHighlighter.directive';
import { BetterBasicHighlighterDirective } from './directives/better-basic-highlighter.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlighterDirective,
    BetterBasicHighlighterDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
