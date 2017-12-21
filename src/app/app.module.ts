import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { CricketersComponent } from './components/cricketers/cricketers.component';
import { BindingComponent } from './components/binding/binding.component';
import { CricketersViewComponent } from './components/cricketers/cricketers-view/cricketers-view.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    CricketersComponent,
    BindingComponent,
    CricketersViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
