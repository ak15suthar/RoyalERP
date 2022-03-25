import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccountModule } from './account/account.module';
import { AdminModule } from './admin/admin.module';
import { FacultyModule } from './faculty/faculty.module';
import { HrModule } from './hr/hr.module';
import { LoginModule } from './login/login.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { StudentsModule } from './students/students.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DataTablesModule } from 'angular-datatables';
import { ConfirmationService } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    AccountModule,
    AdminModule,
    FacultyModule,
    HrModule,
    LoginModule,
    SidebarModule,
    StudentsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    DataTablesModule,
    ConfirmDialogModule
  ],
  providers: [MessageService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
