import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HrComponent } from '../hr/hr/hr.component';
import { PositionComponent } from '../hr/position/position.component';
import { AddpositionComponent } from '../hr/position/addposition/addposition.component';
import { ListpositionComponent } from '../hr/position/listposition/listposition.component';
import { DepartmentComponent } from '../hr/department/department.component';
import { AdddepartmentComponent } from '../hr/department/adddepartment/adddepartment.component';
import { EmployeesComponent } from '../hr/employees/employees.component';
import { AddemployeesComponent } from '../hr/employees/addemployees/addemployees.component';
import { CoursesComponent } from '../hr/courses/courses.component';
import { AddcoursesComponent } from '../hr/courses/addcourses/addcourses.component';
import { AdminComponent } from '../admin/admin/admin.component';
import { UsersComponent } from '../admin/users/users.component';
import { pathToFileURL } from 'url';
import { AddusersComponent } from '../admin/users/addusers/addusers.component';
import { StudentsComponent } from '../students/students/students.component';
import { AddstudentsComponent } from '../students/students/addstudents/addstudents.component';
import { AuthGuard } from '../auth.guard';
import { FacultyComponent } from '../faculty/faculty/faculty.component';
import { BatchComponent } from '../faculty/faculty/batch/batch.component';
import { AddbatchComponent } from '../faculty/faculty/batch/addbatch/addbatch.component';
import { ProfileComponent } from '../faculty/profile/profile.component';
import { ManagebatchComponent } from '../students/managebatch/managebatch.component';
import { AddmanagebatchComponent } from '../students/managebatch/addmanagebatch/addmanagebatch.component';
import { ManageclubComponent } from '../students/manageclub/manageclub.component';
import { AddmanageclubComponent } from '../students/manageclub/addmanageclub/addmanageclub.component';
import { AddmanageonetooneComponent } from '../students/manageonetoone/addmanageonetoone/addmanageonetoone.component';
import { ManageonetooneComponent } from '../students/manageonetoone/manageonetoone.component';
import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';
import { StudentbatchComponent } from '../faculty/studentbatch/studentbatch.component';
import { AddstudentComponent } from '../faculty/addstudent/addstudent.component';
import { SessionComponent } from '../faculty/faculty/session/session.component';
import { AddsessionComponent } from '../faculty/faculty/session/addsession/addsession.component';


const routes: Routes = [
  {path:'sidebar',component:SidebarComponent,children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'hr',component:HrComponent,children:[
      {path:'positions',component:PositionComponent,children:[
        {path:'addpositions',component:AddpositionComponent},
        {path:'listpositions',component:ListpositionComponent},
        {path:'editposition/:id',component:AddpositionComponent}
      ]},
      {path:'department',component:DepartmentComponent,children:[
        {path:'adddepartment',component:AdddepartmentComponent},
        {path:'editdepartment/:id',component:AdddepartmentComponent}  
      ]},
      {path:'employees',component:EmployeesComponent,children:[
        {path:'addemployees',component:AddemployeesComponent},
        {path:'editemployees/:id',component:AddemployeesComponent}
      ]},
      {path:'courses',component:CoursesComponent,children:[
        {path:'addcourses',component:AddcoursesComponent},
        {path:'editcourses/:id',component:AddcoursesComponent}
      ]}
    ],canActivate:[AuthGuard]},
    {path:'admin',component:AdminComponent,children:[
      {path:'users',component:UsersComponent,children:[
        {path:'addusers',component:AddusersComponent},
        {path:'editusers/:id',component:AddusersComponent}
      ]}
    ],canActivate:[AuthGuard]},
    {path:'students',component:StudentsComponent,children:[
      {path:'addstudents',component:AddstudentsComponent},
      {path:'editstudents/:id',component:AddstudentsComponent}
    ]},
    {path:'faculty',component:FacultyComponent,children:[
      {path:'session',component:SessionComponent,children:[
        {path:'addsession',component:AddsessionComponent}
      ]},
      {path:'batch',component:BatchComponent,children:[
        {path:'addbatch',component:AddbatchComponent},
        {path:'editbatch/:id',component:AddbatchComponent}
      ]},
      {path:'studentbatch/:id',component:StudentbatchComponent,children:[
         {path:'addstudent',component:AddstudentComponent}
      ]},
      {path:'profile',component:ProfileComponent}
    ]},
    {path:'managebatch',component:ManagebatchComponent,children:[
      {path:'addmanagebatch',component:AddmanagebatchComponent},
      {path:'editmanagebatch/:id',component:AddmanagebatchComponent}
    ]},
    {path:'manageclub',component:ManageclubComponent,children:[
      {path:'addmanageclub',component:AddmanageclubComponent},
      {path:'editmanageclub/:id',component:AddmanageclubComponent}
    ]},
    {path:'manageonetoone',component:ManageonetooneComponent,children:[
      {path:'addmanageonetoone',component:AddmanageonetooneComponent},
      {path:'editmanageonetoone/:id',component:AddmanageonetooneComponent}
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidebarRoutingModule { }
