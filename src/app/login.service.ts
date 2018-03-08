import { Injectable } from '@angular/core';
import { Login } from './model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }
   url: string = "http://localhost:8088/validate";
   userName:string;
  validate(user:Login):Observable<any>{
  	this.userName=user.name;
  	return this.http.post(this.url,user);
  }

}
