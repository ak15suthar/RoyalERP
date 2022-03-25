import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-manageclub',
  templateUrl: './manageclub.component.html',
  styleUrls: ['./manageclub.component.css']
})
export class ManageclubComponent implements OnInit {
  list : {}
  constructor(private service:StudentService) { }

  ngOnInit() {
      
  }

  delete(value){

  }

}
