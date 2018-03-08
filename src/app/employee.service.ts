import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './model';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) { }
  apiBaseUrl='api/employees';

  getEmployeeList() : Observable<Employee[]>{
  	return this.http.get<Employee[]>(this.apiBaseUrl).pipe(catchError(err=>{
      														return Observable.throw(err);
  													}));
  }
  deleteEmployee(emp: Employee) : Observable<any>{
  	return this.http.delete<Employee>(this.apiBaseUrl+"/"+emp.id).pipe(catchError(err=>{
                                  return Observable.throw(err);
                            }));
  }

  addEmployee(emp: Employee) : Observable<any>{
  	return this.http.post<Employee>(this.apiBaseUrl,emp).pipe(catchError(err=>{
                                  return Observable.throw(err);
                            }));
  }



}
