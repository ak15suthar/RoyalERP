import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FacultyRoutingModule } from './faculty-routing.module';
import { FacultyComponent } from './faculty/faculty.component';
import { ProfileComponent } from './profile/profile.component';
import { BatchComponent } from './faculty/batch/batch.component';
import { AddbatchComponent } from './faculty/batch/addbatch/addbatch.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms'
import { ConfirmationService } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { StudentbatchComponent } from './studentbatch/studentbatch.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { ClubComponent } from './addstudent/club/club.component';
import { GeneralComponent } from './addstudent/general/general.component';
import { OnetooneComponent } from './addstudent/onetoone/onetoone.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MessageService } from 'primeng/api';
import { SessionComponent } from './faculty/session/session.component';
import { AddsessionComponent } from './faculty/session/addsession/addsession.component';

@NgModule({
  declarations: [FacultyComponent, ProfileComponent, BatchComponent, AddbatchComponent, StudentbatchComponent, AddstudentComponent, ClubComponent, GeneralComponent, OnetooneComponent, SessionComponent, AddsessionComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    FacultyRoutingModule,
    DataTablesModule,
    ReactiveFormsModule,
    FormsModule,
    ConfirmDialogModule
  ],
  providers:[ConfirmationService,MessageService]
})
export class FacultyModule { }
