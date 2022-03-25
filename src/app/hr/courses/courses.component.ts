import { Component, OnInit } from '@angular/core';
import { HrService } from '../hr.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  list : {}
  constructor(private service:HrService,private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.service.coursesGet().then(res => {
      this.list = res;
    })
  }
  delete(value){
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        // this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
        this.service.coursesDelete(value).subscribe(res => {
          console.log(res)
        })
      },
      reject: () => {
        [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
      }
    });


    
  }

}
