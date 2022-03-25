import { Component, OnInit } from '@angular/core';
import { FacultyService } from 'src/app/faculty/faculty.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HrService } from 'src/app/hr/hr.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-addbatch',
  templateUrl: './addbatch.component.html',
  styleUrls: ['./addbatch.component.css']
})
export class AddbatchComponent implements OnInit {
  myForm: FormGroup;
  courseList = [];
  empList: {};
  id = 0
  uid = 0
  updateBatch: {}
  constructor(private service1: FacultyService, private service2: HrService, private route: ActivatedRoute,private messageService:MessageService,private rut:Router) { }

  ngOnInit() {
    this.uid = parseInt(sessionStorage.getItem('uid'));
     this.id = this.route.snapshot.params.id;


    

    if (this.id) {
      this.service1.batchGetById(this.id).subscribe(res => {
        this.updateBatch = res;

        this.myForm = new FormGroup({
          bid: new FormControl(this.updateBatch[0].bid, Validators.required),
          bcode: new FormControl(this.updateBatch[0].bcode, Validators.required),
          bname: new FormControl(this.updateBatch[0].bname, Validators.required),
          cid: new FormControl(this.updateBatch[0].cid, Validators.required),
          // empid: new FormControl(this.updateBatch[0].empid, Validators.required),
          startdate: new FormControl(this.updateBatch[0].startdate, Validators.required),
          enddate: new FormControl(this.updateBatch[0].enddate, Validators.required),
          starttime: new FormControl(this.updateBatch[0].starttime, Validators.required),
          endtime: new FormControl(this.updateBatch[0].endtime, Validators.required),
          status: new FormControl(this.updateBatch[0].status, Validators.required),
          type : new FormControl(this.updateBatch[0].type,Validators.required),
          grplink : new FormControl(this.updateBatch[0].grplink,Validators.required)
        })
      })
    }

    this.myForm = new FormGroup({
      bcode: new FormControl('', Validators.required),
      bname: new FormControl('', Validators.required),
      cid: new FormControl('', Validators.required),
      // empid: new FormControl(this.empid, Validators.required),
      startdate: new FormControl('', Validators.required),
      enddate: new FormControl('', Validators.required),
      starttime: new FormControl('', Validators.required),
      endtime: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      uid: new FormControl(this.uid, Validators.required),
      type : new FormControl('',Validators.required),
      grplink : new FormControl('',Validators.required)
    })

    this.service2.coursesGet().then(res => {
      this.courseList = res;
    })

    this.service2.employeeGet().then(res => {
      this.empList = res;
    })
  }

  submit() {
    if (this.id) {
      this.service1.batchUpdate(this.myForm.value).subscribe(res => {
        console.log(res);
      })
      this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Successfully Update Batch' });
      this.rut.navigate(['/sidebar/faculty/batch'])

    }
    else {
      this.service1.batchAdd(this.myForm.value).subscribe(res => {
        console.log(res);
      })
      this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Successfully Added Batch' });

    }
  }

}
