import { Component, OnInit } from '@angular/core';
import{EmployeesService} from '../service/employees.service';
import {IEmployees} from '../model/employees.model'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  allEmployee:IEmployees[];
  constructor(private _empService:EmployeesService) { }

  ngOnInit() {
    this.getAllEmployee();
  }

  getAllEmployee(){

    this._empService.getEmployeelist().subscribe(
       (data:IEmployees[])=>{
         this.allEmployee=data;
         console.log(data);

       });
       
  }
  


 


  // ***************************************

}
