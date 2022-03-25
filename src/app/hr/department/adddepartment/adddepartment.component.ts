import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HrService } from '../../hr.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adddepartment',
  templateUrl: './adddepartment.component.html',
  styleUrls: ['./adddepartment.component.css']
})
export class AdddepartmentComponent implements OnInit {
  myForm: FormGroup;
  id = 0;
  updateDepartment = {};
  constructor(private service: HrService, private messageService: MessageService, private routes: ActivatedRoute,private rut:Router) { }

  ngOnInit() {
    this.id = this.routes.snapshot.params.id;

    if (this.id) {
      this.service.departmentGetById(this.id).then(res => {
        this.updateDepartment = res;
        console.log(this.updateDepartment);

        this.myForm = new FormGroup({
          did: new FormControl(this.updateDepartment[0].did, Validators.required),
          deptcode: new FormControl(this.updateDepartment[0].deptcode, Validators.required),
          deptname: new FormControl(this.updateDepartment[0].deptname, Validators.required),
          deptshort: new FormControl(this.updateDepartment[0].deptshort, Validators.required),
          deptlevel: new FormControl(this.updateDepartment[0].deptlevel, Validators.required),
          positiondesc: new FormControl(this.updateDepartment[0].positiondesc, Validators.required),
          status: new FormControl(this.updateDepartment[0].status, Validators.required)
        })
      })
    }


    this.myForm = new FormGroup({
      deptcode: new FormControl('', Validators.required),
      deptname: new FormControl('', Validators.required),
      deptshort: new FormControl('', Validators.required),
      deptlevel: new FormControl('', Validators.required),
      positiondesc: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)
    })
  }
  submit() {
    if (this.id) {
      this.service.departmentUpdate(this.myForm.value).subscribe(res => {
       console.log(res);
      })
      this.rut.navigate(['/sidebar/hr/department'])
    }
    else {
      this.service.departmentAdd(this.myForm.value).subscribe(res => {
        console.log(res);
        console.log(this.myForm.value);
      })
      this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Successfully Added Department' });
    }
  }

}
