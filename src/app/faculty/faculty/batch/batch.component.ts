import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../../faculty.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {
  list = []
  uid = 0;
  constructor(private service:FacultyService,private confirmationService:ConfirmationService) { }

  ngOnInit() {
    this.uid = parseInt(sessionStorage.getItem('uid'));
    console.log(this.uid);
    
    this.service.batchGetUserById(this.uid).subscribe(res => {
      this.list = res;
      console.log("Bol "+res);
      
    })
  }

  delete(value){

    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle' ,
      accept: () => {
        // this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
        this.service.batchDelete(value).subscribe(res => {
          console.log(res);
          
        })
      },
      reject: () => {
        [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
      }
    });



    
  }

}
