import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';

import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

// import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
    // FormsModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  bootstrap: [LoginComponent]
  // providers: [AuthService]
})
export class AccessModule { }
