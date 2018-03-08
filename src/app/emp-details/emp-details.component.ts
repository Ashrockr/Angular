import { Component, OnInit } from '@angular/core';
import { Employee } from '../model';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { LoadingComponent } from '../loading/loading.component';
import { trigger,state,style,transition,animate,query,keyframes,stagger } from '@angular/animations';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css'],
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
		trigger('employees', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
          ,
        query(':leave', stagger('300ms', [
          animate('.6s ease-out', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])
	]
})
export class EmpDetailsComponent implements OnInit {
	employees: Employee[];
	isFirst:boolean;
	message: string;
	animate:boolean;
	addEmp:boolean;
  constructor(private empService: EmployeeService) { }

  ngOnInit() {
		this.isFirst=true;
		this.animate=true;
		this.addEmp=false;
		console.log("DNW")
		this.empService.getEmployeeList().subscribe(valid => {
															this.employees=valid;
															this.isFirst=false;
															console.log("notfailed")
														}
														, (error)=>{
															this.message="Cannot connect to service! Try again later.";
															this.isFirst=false;
															console.log(error);
															}
														);

  }
  addEmployee(employee: Employee): void {
  	this.addEmp=false;
  	if(employee.name){
  		this.empService.addEmployee(employee).subscribe(employee=>this.employees.push(employee));
  	}
  }
  add(){
  	this.addEmp=true;
  }

  delete(employee: Employee): void {
  this.employees = this.employees.filter(h => h !== employee);
  this.empService.deleteEmployee(employee).subscribe();
	}

}
