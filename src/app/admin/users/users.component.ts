import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  list : {}
  constructor(private service:AdminService,private confirmationService:ConfirmationService) { }

  ngOnInit(){
    this.service.usersGet().then(res => {
      this.list = res;
    })
  }

  delete(value){
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle' ,
      accept: () => {
        // this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
        this.service.usersDelete(value).subscribe(res => {
          console.log(res);
        })
      },
      reject: () => {
        [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
      }
    });


    
  }

}
