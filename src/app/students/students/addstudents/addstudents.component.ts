import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { StudentService } from '../../student.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-addstudents',
  templateUrl: './addstudents.component.html',
  styleUrls: ['./addstudents.component.css']
})
export class AddstudentsComponent implements OnInit {
  myForm: FormGroup;
  id = 0;
  updateStudent = [];
  fileToUpload: File = null;
  uploadFiles = [];
  imagePath: string;
  constructor(private service: StudentService, private router: ActivatedRoute,private messageService:MessageService) { }

  ngOnInit() {
    this.id = this.router.snapshot.params.id;

    if (this.id) {
      this.service.studentGetById(this.id).then(res => {
        this.updateStudent = res;

        this.myForm = new FormGroup({
          sid: new FormControl(this.updateStudent[0].sid, Validators.required),
          scode: new FormControl(this.updateStudent[0].scode, Validators.required),
          fn: new FormControl(this.updateStudent[0].fn, Validators.required),
          mn: new FormControl(this.updateStudent[0].mn, Validators.required),
          ln: new FormControl(this.updateStudent[0].ln, Validators.required),
          gender: new FormControl(this.updateStudent[0].gender, Validators.required),
          address: new FormControl(this.updateStudent[0].address, Validators.required),
          dob: new FormControl(this.updateStudent[0].dob, Validators.required),
          doj: new FormControl(this.updateStudent[0].doj, Validators.required),
          qualification: new FormControl(this.updateStudent[0].qualification, Validators.required),
          collegename: new FormControl(this.updateStudent[0].collegename, Validators.required),
          ref: new FormControl(this.updateStudent[0].ref, Validators.required),
          mobile: new FormControl(this.updateStudent[0].mobile, Validators.required),
          email: new FormControl(this.updateStudent[0].email, Validators.required),
          inqdetail: new FormControl(this.updateStudent[0].inqdetail, Validators.required),
          typeofstudent: new FormControl(this.updateStudent[0].typeofstudent, Validators.required),
          status: new FormControl(this.updateStudent[0].status, Validators.required),
          image: new FormControl(this.uploadFiles)
        })
        this.imagePath = this.updateStudent[0].image;
        console.log(this.imagePath);
        
      })
    }

    this.myForm = new FormGroup({
      scode: new FormControl('', Validators.required),
      fn: new FormControl('', Validators.required),
      mn: new FormControl('', Validators.required),
      ln: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      doj: new FormControl('', Validators.required),
      qualification: new FormControl('', Validators.required),
      collegename: new FormControl('', Validators.required),
      ref: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      inqdetail: new FormControl('', Validators.required),
      typeofstudent: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      image: new FormControl(this.uploadFiles)
    })
  }

  handleFileInput(file: FileList) {
    if (file.length > 0) {
      this.fileToUpload = file.item(0);
      this.service.postFileStudent(file.item(0)).subscribe(res => {
        this.uploadFiles.push(res["name"]);
      })
    }
  }

  submit() {
    if (this.id) {
      this.service.studentUpdate(this.myForm.value).subscribe(res => {
        console.log(res);
        
      })
    }
    else {
      this.service.studentAdd(this.myForm.value).subscribe(res => {
        console.log(res);
      })
      this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Successfully Added Student' });

    }
  }
}
