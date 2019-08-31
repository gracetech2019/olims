import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';



@NgModule({
  declarations: [EmployeesComponent, EmployeeComponent, EmployeeListComponent],
  imports: [
    CommonModule
  ],
  exports:[
    EmployeesComponent,
    
     EmployeeComponent,
      EmployeeListComponent


  ]
})
export class EmployeesModule { }
