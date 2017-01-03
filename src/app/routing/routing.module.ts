import { NgModule } from '@angular/core';
import { RouterModule,Routes }	from '@angular/router';

import { LoginRoutingModule } from '../access/login/login-routing.module';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  	imports : [RouterModule.forRoot(routes)],
	exports : [
		LoginRoutingModule,
		DashboardRoutingModule
	]
})
export class RoutingModule { }
