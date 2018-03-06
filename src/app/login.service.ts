import { Injectable } from '@angular/core';
import { Login } from './model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class LoginService {

  constructor(private http: Http) { }
   url: string = "http://localhost:8088/validate";
  validate(user:Login):Observable<any>{
  	console.log(user);
  	return this.http.post(this.url,user).map(res=>res.json()).catch(err=>{
  		return Observable.throw(err);
  	});
  }

}
