import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';
import { AddusersComponent } from './users/addusers/addusers.component';
import { DataTablesModule } from 'angular-datatables';
import { ConfirmationService } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ReactiveFormsModule,FormsModule } from '@angular/forms'
import { MessageService } from 'primeng/api';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [AdminComponent, UsersComponent, AddusersComponent, ProfileComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    ConfirmDialogModule,
    ReactiveFormsModule,
    FormsModule,
    AdminRoutingModule,
    
    
  ],
  providers:[ConfirmationService,MessageService]
})
export class AdminModule { }
