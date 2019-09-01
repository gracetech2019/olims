import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/service/employees.service';

import{IEmployees} from '../../model/employees.model'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee:IEmployees[];
  constructor(private _empService:EmployeesService) { }
  
  ngOnInit() {
    this._empService.getEmployeelist().subscribe((data)  =>{

      this.employee=data;
      console.log(data)
    }  )
    
  }
  
 

    

      
  


}
