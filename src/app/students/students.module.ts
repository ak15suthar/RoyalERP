import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students/students.component';
import { AddstudentsComponent } from './students/addstudents/addstudents.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ManagebatchComponent } from './managebatch/managebatch.component';
import { AddmanagebatchComponent } from './managebatch/addmanagebatch/addmanagebatch.component';
import { ManageclubComponent } from './manageclub/manageclub.component';
import { ManageonetooneComponent } from './manageonetoone/manageonetoone.component';
import { AddmanageclubComponent } from './manageclub/addmanageclub/addmanageclub.component';
import { AddmanageonetooneComponent } from './manageonetoone/addmanageonetoone/addmanageonetoone.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [StudentsComponent, AddstudentsComponent, ManagebatchComponent, AddmanagebatchComponent, ManageclubComponent, ManageonetooneComponent, AddmanageclubComponent, AddmanageonetooneComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    StudentsRoutingModule,
    DataTablesModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class StudentsModule { }
