import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  list: {};
  constructor(private service: StudentService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.service.studentGet().then(res => {
      this.list = res;
    })
  }

  delete(value) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        // this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
        this.service.studentDelete(value).subscribe(res => {
          console.log(res);
        })
      },
      reject: () => {
        [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
      }
    });
  }

}
