import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesModule } from './employees/employees.module';
import { EmployeesService } from './service/employees.service';
import{FormsModule} from '@angular/forms' ;
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EmployeesModule,
 CommonModule ,
 BrowserAnimationsModule ,
  ToastrModule.forRoot({
    timeOut: 6000,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
  }),

  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
