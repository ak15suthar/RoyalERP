import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listStudent :Array<any>=[];
  listFaculty : {}
  listCourse : {}
  constructor(private service:DashboardService) { }

  ngOnInit(){
    this.service.countStudent().then(res => {
      this.listStudent = res[0].stud;
      console.log("HH : "+this.listStudent);
    })

    this.service.countFaculties().then(res => {
      this.listFaculty = res[0].fac;
      console.log("Fac : "+this.listFaculty);
    })

    this.service.countCourses().then(res => {
      this.listCourse = res[0].cou;
      console.log("Cou : "+this.listCourse);
      
    })
  }

}
