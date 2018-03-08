import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { trigger,state,style,transition,animate,query,keyframes,stagger } from '@angular/animations';
@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css'],
  animations: [
  trigger('error',[
			state('true',style({transform: 'translateY(0)',display:'block'})),
			state('false',style({transform: 'translateY(-40%) ',display: 'none'})),
			transition('false <=> true', animate('100ms ease-in'))
			]),
  	trigger('loads', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.3s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-25%)', offset: 0}),
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
export class AddEmpComponent implements OnInit {
	@Output() addEmp = new EventEmitter<Employee>();
	employee: Employee={
		id:null,
		name:null,
		salary:null
	};
	addEmpForm: FormGroup;
	name: FormControl;
	salary: FormControl;
	animate: boolean;
  constructor() { }
  add
  ngOnInit() {
  	this.animate=true;
  	this.name = new FormControl('',Validators.required);
		this.salary = new FormControl('', Validators.required);
		this.addEmpForm = new FormGroup({
			name:this.name,
			salary:this.salary
		});
  }
  addEmployee(){
  	this.addEmp.emit(this.employee);
  	close();
  }
  close(){
  	document.getElementById('myModal').style.display = "none";
  }
}
