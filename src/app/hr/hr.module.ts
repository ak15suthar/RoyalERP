import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HrRoutingModule } from './hr-routing.module';
import { HrComponent } from './hr/hr.component';
import { PositionComponent } from './position/position.component';
import { AddpositionComponent } from './position/addposition/addposition.component';
import { ListpositionComponent } from './position/listposition/listposition.component';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { DepartmentComponent } from './department/department.component';
import { AdddepartmentComponent } from './department/adddepartment/adddepartment.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddemployeesComponent } from './employees/addemployees/addemployees.component';
import { CoursesComponent } from './courses/courses.component';
import { AddcoursesComponent } from './courses/addcourses/addcourses.component';
import { ConfirmationService } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [HrComponent, PositionComponent, AddpositionComponent, ListpositionComponent, DepartmentComponent, AdddepartmentComponent, EmployeesComponent, AddemployeesComponent, CoursesComponent, AddcoursesComponent, ProfileComponent],
  imports: [
    CommonModule,
    HrRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    ConfirmDialogModule
  ],
  providers:[ConfirmationService]
})
export class HrModule { }
