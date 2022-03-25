import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { HrService } from 'src/app/hr/hr.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  uid = 0
  constructor(private messageService:MessageService,private rut:Router,private service:HrService) { }

  ngOnInit(){

  }

  get isloginhr(){
  this.uid = parseInt(sessionStorage.getItem('uid'));
    if(this.uid == 6){
      return this.service.isLogin();
    }
  }

  get isloginfac(){
    this.uid = parseInt(sessionStorage.getItem('uid'));
    if(this.uid == 8){
      return this.service.isLogin();
    }
    else if(this.uid == 10){
      return this.service.isLogin();
    }
  }

  get isloginadmin(){
    this.uid = parseInt(sessionStorage.getItem('uid'));
    if(this.uid == 5){
      return this.service.isLogin();
    }
  }

  get islogindata(){
    this.uid = parseInt(sessionStorage.getItem('uid'));
    if(this.uid == 9){
      return this.service.isLogin();
    }
  }

  logout(){

    sessionStorage.clear();
    this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Logout' });
    this.rut.navigate(['/']);
  }

}
