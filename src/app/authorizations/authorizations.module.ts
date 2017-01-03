import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GrantsComponent } from './grants/grants.component';;

const routes : Routes = [
	{ path: 'grantsList', component: GrantsComponent}
];

@NgModule({
	imports : [RouterModule.forRoot(routes)],
	exports : [GrantsComponent]
})

export class DashboardRoutingModule { }