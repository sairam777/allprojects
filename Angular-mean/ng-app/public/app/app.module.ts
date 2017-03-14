
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import {SignupComponent} from './components/signupcomponent/signup.component';
import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {routing} from './app.routing';




@NgModule({
  imports: [BrowserModule,FormsModule,routing],
  declarations:[AppComponent,SignupComponent],
  bootstrap:[AppComponent]
})

export class AppModule { }
