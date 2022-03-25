import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FacultyService } from '../faculty.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  
  title = 'nodemailerDemo';
  public subscription: Subscription;
  constructor(private sendmailservice: FacultyService, private fb: FormBuilder) { }

  infoForm = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.minLength(3)
    ]
    ],
    email: ['', [
      Validators.required,
      Validators.email
    ]
    ]
  });

  get name() { return this.infoForm.get('name'); }
  get email() { return this.infoForm.get('email'); }


  sendMail() {
    console.log(this.infoForm.value);
    this.subscription = this.sendmailservice.sendEmail(this.infoForm.value).
    subscribe(data => {
      let msg = data['message']
      alert(msg);
      // console.log(data, "success");
    }, error => {
      console.error(error, "error");
    } );
  }

  ngOnInit() {
  }
  ngOnDestroy() {
  }

}