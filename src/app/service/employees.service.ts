import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import  {RootUrl} from '../main-rooturl/rooturl';
import { Observable } from 'rxjs';
import { IEmployees } from '../model/employees.model';
import {HttpHeaders} from '@angular/common/http'


const httpOptions = {headers: new HttpHeaders({'Content-Type':  'application/json'})
  }; 


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
constructor(private _http:HttpClient  
  ) { }
 getEmployeelist():Observable<IEmployees[]>{
      return this._http.get<IEmployees[]>(`${RootUrl}employee`,httpOptions) ;
     }
     
     saveEmployee():Observable<IEmployees[]>{
      return this._http.post<IEmployees[]>(`${RootUrl}employee`,httpOptions) ;
     }
    

    // ************last one*******************
}
