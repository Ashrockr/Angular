import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmpUpdateComponent } from './emp-update/emp-update.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginService } from './login.service';
import { EmployeeService } from './employee.service';
import { LoadingComponent } from './loading/loading.component';
import { LoaderService } from './loading/loader.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmpDetailsComponent,
    EmpUpdateComponent,
    AddEmpComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService,
    EmployeeService,
    LoaderService
  ],
  exports:[
    LoadingComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
