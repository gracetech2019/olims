import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms';
import{EmployeesService} from '../../service/employees.service';
import{IEmployees} from '../../model/employees.model';
import{FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
employee:IEmployees[];
  constructor(private _empService:EmployeesService,
    private _fb:FormBuilder) { }

  ngOnInit() {
  }
  get uname(){
    return this.emloyeesForm.get('uname')
  }
  get umobile(){
    return this.emloyeesForm.get('umobile')
  }

  emloyeesForm=this._fb.group({

    uname:['',[Validators.required,Validators.minLength(3)]],
    umobile:[]
//     address:this._fb.group({  

// city:[]      
//     })
  })

  onSubmit(emloyeesForm):void{

console.log(emloyeesForm.value)


  }

}
