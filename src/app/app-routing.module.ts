import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoadingComponent } from './loading/loading.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';

const routes: Routes=[
	{
		path: '',
		component: LoginComponent
	},
	{
		path: 'login',
		component: LoadingComponent
	},
	{
		path: 'empDetails',
		component: EmpDetailsComponent
	}
];
@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [
	RouterModule
	],
	declarations: []
})
export class AppRoutingModule { }
