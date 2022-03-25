import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FacultyService } from 'src/app/faculty/faculty.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-addsession',
  templateUrl: './addsession.component.html',
  styleUrls: ['./addsession.component.css']
})
export class AddsessionComponent implements OnInit {
  myForm: FormGroup;
  uid = 0
  batchList : {}
  sessionList : {}
  constructor(private service:FacultyService,private messageService: MessageService) { }

  ngOnInit(){
    this.uid = parseInt(sessionStorage.getItem("uid"));
    console.log("Uid : "+this.uid);

    this.service.batchGetUserById(this.uid).subscribe(res => {
      this.batchList = res;
    })

    this.myForm = new FormGroup({
      uid : new FormControl(this.uid,Validators.required),
      stime : new FormControl('',Validators.required),
      etime : new FormControl('',Validators.required),
      mon : new FormControl('',Validators.required),
      tue : new FormControl('',Validators.required),
      wed : new FormControl('',Validators.required),
      thu : new FormControl('',Validators.required),
      fri : new FormControl('',Validators.required),
      sat : new FormControl('',Validators.required),
      sun : new FormControl('',Validators.required),
      status : new FormControl('',Validators.required)
    })
  }
  submit() {
    this.service.addSession(this.myForm.value).subscribe(res => {
      console.log(res);

    })
    this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Successfully Added Session' });

  }
}
