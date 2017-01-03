import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';

import { RoutingModule } from './routing/routing.module';
import { AccessModule } from './access/access.module';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AccountService } from './account/account.service';
import { GrantsComponent } from './authorizations/grants/grants.component';

@NgModule({
  declarations: [
    AppComponent,
    GrantsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RoutingModule,
    AccessModule,
    SharedModule,
    DashboardModule
  ],
  providers: [
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
