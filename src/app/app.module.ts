import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

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
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    LoginService,
    EmployeeService
  ],
  exports:[
    LoadingComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
