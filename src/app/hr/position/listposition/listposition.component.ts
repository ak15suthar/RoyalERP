import { Component, OnInit } from '@angular/core';
import { HrService } from '../../hr.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-listposition',
  templateUrl: './listposition.component.html',
  styleUrls: ['./listposition.component.css']
})
export class ListpositionComponent implements OnInit {
  list: {};
  constructor(private service: HrService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.service.positionGet().then(res => {
      this.list = res;
    })
  }

  delete(value) {
      this.confirmationService.confirm({
          message: 'Are you sure that you want to proceed?',
          header: 'Confirmation',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              // this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
              this.service.positionDelete(value).subscribe(res => {
                console.log("Deleted : " + res);
              })
          },
          reject: () => {
                [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
          }
      });
  


    
  }
}
