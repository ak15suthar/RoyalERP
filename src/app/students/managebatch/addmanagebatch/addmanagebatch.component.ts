import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from '../../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-addmanagebatch',
  templateUrl: './addmanagebatch.component.html',
  styleUrls: ['./addmanagebatch.component.css']
})
export class AddmanagebatchComponent implements OnInit {
  listBatch: {};
  listStudent: {};
  myForm: FormGroup;
  id = 0;
  updateManageBatch = [];
  constructor(private service: StudentService, private routes: ActivatedRoute,private messageService:MessageService,private rut:Router) { }

  ngOnInit() {
    this.id = this.routes.snapshot.params.id;

    if (this.id) {
      this.service.manageBatchGetById(this.id).then(res => {
        this.updateManageBatch = res;

        this.myForm = new FormGroup({
          bsid : new FormControl(this.updateManageBatch[0].bsid,Validators.required),
          bid: new FormControl(this.updateManageBatch[0].bid, Validators.required),
          sid: new FormControl(this.updateManageBatch[0].sid, Validators.required),
          status: new FormControl(this.updateManageBatch[0].status, Validators.required)
        })

      })
    }


    this.service.genDetailGet().then(res => {
      this.listBatch = res;
    })

    this.service.getGenStudent().then(res => {
      this.listStudent = res;
    })

    this.myForm = new FormGroup({
      bid: new FormControl('', Validators.required),
      sid: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)
    })
  }

  submit() {
    if(this.id){
      this.service.manageBatchUpdate(this.myForm.value).subscribe(res => {
        console.log(res);
  
      })
      this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Successfully Updated Manage Batch' });
      this.rut.navigate(['/sidebar/managebatch'])

    }
    else{
      this.service.manageBatchAdd(this.myForm.value).subscribe(res => {
        console.log(res);
        
      })
      this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Successfully Added Manage Batch' });

    }

    
  }

}
