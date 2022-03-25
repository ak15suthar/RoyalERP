import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  uid = 0;
  emp: any;
  constructor(private service:AdminService) { }

  ngOnInit(){
    this.uid = parseInt(sessionStorage.getItem('uid'));
    this.service.usersGetById(this.uid).then(res => {
      this.emp = res[0];
      console.log(this.emp);
      

    })
  }

}
