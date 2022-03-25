import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { HrService } from '../hr.service';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
  list: {};
  constructor(private service: HrService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.service.positionGet().then(res => {
      this.list = res;
    })
  }

  delete(value) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle' ,
      accept: () => {
        // this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
        this.service.positionDelete(value).subscribe(res => {
          console.log("Deleted : " + res);
        })
      },
      reject: () => {
        [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
      }
    });
  }
}
