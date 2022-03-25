import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../student.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-addmanageclub',
  templateUrl: './addmanageclub.component.html',
  styleUrls: ['./addmanageclub.component.css']
})
export class AddmanageclubComponent implements OnInit {
  myForm:FormGroup;
  listBatch : {}
  listStudent : {}
  constructor(private service:StudentService,private messageService: MessageService) { }

  ngOnInit(){

    this.service.clubDetailGet().then(res => {
      this.listBatch = res;
    })

    this.service.getClubStudent().then(res => {
      this.listStudent =res;
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
    this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Successfully Added Manage Club' });

  }
}
