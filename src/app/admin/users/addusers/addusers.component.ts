import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HrService } from 'src/app/hr/hr.service';
import { AdminService } from '../../admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent implements OnInit {
  myForm: FormGroup;
  list: {};
  employeeList: {};
  departmentList : {};
  updateUser: {};
  id = 0;
  constructor(private service1: HrService, private service2: AdminService, private routes: ActivatedRoute,private messageService:MessageService,private rut:Router) { }

  ngOnInit() {

    this.id = this.routes.snapshot.params.id;

    if (this.id) {
      this.service2.usersGetById(this.id).then(res => {
        this.updateUser = res;

        this.myForm = new FormGroup({
          uid: new FormControl(this.updateUser[0].uid, Validators.required),
          empid: new FormControl(this.updateUser[0].empid, Validators.required),
          username: new FormControl(this.updateUser[0].username, Validators.required),
          password: new FormControl(this.updateUser[0].password, Validators.required),
          role: new FormControl(this.updateUser[0].role, Validators.required),
          editiong: new FormControl(this.updateUser[0].editiong, Validators.required),
          status: new FormControl(this.updateUser[0].status, Validators.required),
          did : new FormControl(this.updateUser[0].status,Validators.required)
        })
      })

     

    }

    this.service1.employeeGet().then(res => {
      this.employeeList = res;
    })

    this.service1.departmentGet().then(res => {
      this.departmentList = res;
    })

    this.myForm = new FormGroup({
      empid: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      editiong: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      did : new FormControl('',Validators.required)
    })
  }

  submit() {
    if (this.id) {
      this.service2.usersUpdate(this.myForm.value).subscribe(res => {
        console.log(res);
      })
      this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Successfully Updated User' });
      this.rut.navigate(['./admin/users'])

    }
    else {
      this.service2.usersAdd(this.myForm.value).subscribe(res => {
        console.log(res);
      })
      this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Successfully Added User' });

    }
  }

}
