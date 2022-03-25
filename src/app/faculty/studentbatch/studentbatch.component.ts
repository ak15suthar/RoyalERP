import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../faculty.service';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/students/student.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-studentbatch',
  templateUrl: './studentbatch.component.html',
  styleUrls: ['./studentbatch.component.css']
})
export class StudentbatchComponent implements OnInit {
  id = 0
  sid = 0
  myForm: FormGroup
  public subscription: Subscription
  getEmailId: {}
  student: {}
  addStudent: {}
  constructor(private service1: FacultyService, private service2: StudentService, private messageService: MessageService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;

    this.service1.getBatchStudent(this.id).then(res => {
      this.student = res;

      if (this.student[0].typeofstudent == "General") {
        this.service2.getGenStudent().then(res => {
          this.addStudent = res;
        })
      }
      else if (this.student[0].typeofstudent == "Club") {
        this.service2.getClubStudent().then(res => {
          this.addStudent = res;
        })
      }
      else if (this.student[0].typeofstudent == "One To One") {
        this.service2.getOnetooneStudent().then(res => {
          this.addStudent = res;
        })
      }
    })

    this.myForm = new FormGroup({
      bid: new FormControl(this.id, Validators.required),
      sid: new FormControl('', Validators.required),
      status: new FormControl('Active', Validators.required)
    })
  }

  sendmail(value) {
    // this.sid = event.target.value;
    // console.log("Sid : " + this.sid);
    this.service1.getMailStudent(value).then(res => {
      this.getEmailId = res;
      console.log(this.getEmailId);

      console.log("Email : " + this.getEmailId[0].email);
      console.log("Grouplink : " + this.getEmailId[0].grplink);

      this.subscription = this.service1.sendEmail(this.getEmailId[0]).
      subscribe(data => {
        let msg = data['message']
        alert(msg);
        // console.log(data, "success");
      }, error => {
        console.error(error, "error");
      });

    })

  }



  submit() {

    
    this.service2.manageBatchAdd(this.myForm.value).subscribe(res => {
      console.log(res);
      this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Successfully Added Student' });

      console.log(this.myForm.value);


    })
  }
}
