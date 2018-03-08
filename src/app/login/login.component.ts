import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Login } from '../model';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { LoadingComponent } from '../loading/loading.component';
import { trigger,state,style,transition,animate,query,keyframes,stagger } from '@angular/animations';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	animations: [
		trigger('error',[
			state('true',style({transform: 'translateY(0)',display:'block'})),
			state('false',style({transform: 'translateY(-40%) ',display: 'none'})),
			transition('false <=> true', animate('100ms ease-in'))
			]),
		trigger('errorShow',[
			state('true',style({transform: 'translateY(0)',display:'block'})),
			state('false',style({transform: 'translateY(30%) ',display: 'none'})),
			transition('false <=> true',animate('200ms ease-in'))
				
			]),
		trigger('load1', [
		      transition(':enter', [

		        query(':enter', style({ opacity: 0 }), {optional: true}),

		        query(':enter', stagger('150ms', [
		          animate('.4s ease-in', keyframes([
		            style({opacity: 0, transform: 'translateY(-55%)', offset: 0}),
		            style({opacity: .5, transform: 'translateY(15px)',  offset: 0.3}),
		            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
		          ]))]), {optional: true})
		          ,
		        query(':leave', stagger('300ms', [
		          animate('.4s ease-out', keyframes([
		            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
		            style({opacity: .5, transform: 'translateY(15px)',  offset: 0.3}),
		            style({opacity: 0, transform: 'translateY(-55%)',     offset: 1.0}),
		          ]))]), {optional: true})
		      ])
		    ])
	]
})
export class LoginComponent implements OnInit {
	user :Login={
		name:null,
		password:null
	}
	loginForm: FormGroup;
	name: FormControl;
	password: FormControl;
	isFirst:boolean;
	isInValid:boolean=false;
	isLoading:boolean=true;
	isValidUser:boolean=true;
	isDown:boolean=false;
	animate:boolean;
	message:string;
	constructor(private loginService:LoginService,
				private router : Router
		) { }

	ngOnInit() {
		this.animate=true;
		this.isFirst=false;
		this.name = new FormControl('',Validators.required);
		this.password = new FormControl('', Validators.required);
		this.loginForm = new FormGroup({
			name:this.name,
			password:this.password
		});

	}
	
		validate(){
			console.log('loading');
			this.isFirst=true;
			setTimeout(()=>{
				this.message="Cannot connect to service! Try again later.";
															this.isFirst=false;
															this.isDown=true;
															this.loginForm.reset();
															document.getElementById("username").focus();
															this.animate=false;
															this.router.navigate(['empDetails']);

			},1000);
			
			/*this.loginService.validate(this.user).subscribe(valid => {
															this.isValidUser= valid;
															this.isDown=false;
															if(this.isValidUser){
																this.isLoading=false;
																this.router.navigate(['empDetails']);
															}
															else{
																this.isLoading=false;
																this.router.navigate(['login']);
															}
														}
														, (error)=>{
															this.message="Cannot connect to service! Try again later.";
															this.isLoading=false;
															this.isDown=true;
															this.loginForm.reset();}
														);*/
		
}