import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeesService } from '../service/employees.service';
import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule,FormsModule} from '@angular/forms'



@NgModule({
  declarations: [EmployeesComponent, EmployeeComponent, EmployeeListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    EmployeesComponent,
    
     EmployeeComponent,
      EmployeeListComponent  ],
      providers:[EmployeesService]

})
export class EmployeesModule { }
