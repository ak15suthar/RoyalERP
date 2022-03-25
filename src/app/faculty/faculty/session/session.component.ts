import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../../faculty.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  list : {}
  uid = 0
  getSession : {}
  batchList : {}
  constructor(private service:FacultyService) { }

  ngOnInit(){

     this.uid = parseInt(sessionStorage.getItem("uid"));
    // console.log("Uid : "+this.uid);

    // this.service.batchGetUserById(this.uid).subscribe(res => {
    //   this.batchList = res;
    // })

    this.service.getSessionById(this.uid).then(res => {
      this.getSession = res;
    })
  }

  delete(value){

  }
}
