import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Login} from '../model';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { LoadingComponent } from '../loading/loading.component';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	user :Login={
		name:null,
		password:null
	}
	loginForm: FormGroup;
	name: FormControl;
	password: FormControl;
	isInValid:boolean=false;
	isLoading:boolean=false;
	isValidUser:boolean=false;
	message:string;
	constructor(private loginService:LoginService,
				private router : Router,
				private loading: LoadingComponent
		) { }

	ngOnInit() {
		this.name = new FormControl('',Validators.required);
		this.password = new FormControl('', Validators.required);
		this.loginForm = new FormGroup({
			name:this.name,
			password:this.password
		});
		this.loading.show();

	}
		validate(){
		this.loading.show();
		this.loginService.validate(this.user).subscribe(valid => {
															this.isValidUser= valid;
															this.loading.hide();
														}
														, (error)=>{
															this.message="Cannot connect to service! Try again later.";
															this.loading.hide();}
														);
		if(this.isValidUser){
			console.log(this.isValidUser);
			this.router.navigate(['empDetails']);
		}
		else{
			this.isLoading=false;
		}
	}

		
}
