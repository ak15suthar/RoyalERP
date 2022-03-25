import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HrService } from '../../hr.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-addcourses',
  templateUrl: './addcourses.component.html',
  styleUrls: ['./addcourses.component.css']
})
export class AddcoursesComponent implements OnInit {
  myForm: FormGroup;
  updateCourses: {};
  id = 0;
  constructor(private service: HrService, private router: ActivatedRoute, private rut: Router,private messageService: MessageService) { }

  ngOnInit() {
    this.id = this.router.snapshot.params.id;

    if (this.id) {
      this.service.coursesGetById(this.id).then(res => {
        this.updateCourses = res;

        this.myForm = new FormGroup({
          cid: new FormControl(this.updateCourses[0].cid, Validators.required),
          cname: new FormControl(this.updateCourses[0].cname, Validators.required),
          ccode: new FormControl(this.updateCourses[0].ccode, Validators.required),
          status: new FormControl(this.updateCourses[0].status, Validators.required)
        })
      })
    }

    this.myForm = new FormGroup({
      cname: new FormControl('', Validators.required),
      ccode: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)
    })
  }

  submit() {
    if (this.id) {
      this.service.coursesUpdate(this.myForm.value).subscribe(res => {
        console.log(res);        
      })
      this.rut.navigate(['/sidebar/hr/courses']);
    }
    else {
      this.service.coursesAdd(this.myForm.value).subscribe(res => {
        console.log(res);
      })
      this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Successfully Added Courses' });
    }
  }
}
