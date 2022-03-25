import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from '../../student.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-addmanageonetoone',
  templateUrl: './addmanageonetoone.component.html',
  styleUrls: ['./addmanageonetoone.component.css']
})
export class AddmanageonetooneComponent implements OnInit {
  listBatch : {}
  listStudent : {}
  myForm:FormGroup
  constructor(private service:StudentService,private messageService: MessageService) { }

  ngOnInit() {
    this.service.getOnetooneStudent().then(res => {
      this.listStudent = res;
    })

    this.service.onetooneDetailGet().then(res => {
      this.listBatch = res;
    })

    this.myForm = new FormGroup({
      bid : new FormControl('',Validators.required),
      sid : new FormControl('',Validators.required),
      status : new FormControl('',Validators.required)
    })
  }

  submit(){
    this.service.manageBatchAdd(this.myForm.value).subscribe(res => {
      console.log(res);

    })
    this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Successfully Added Manage One To One' });

  }

}
