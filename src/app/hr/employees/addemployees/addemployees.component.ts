import { Component, OnInit } from '@angular/core';
import { HrService } from '../../hr.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-addemployees',
  templateUrl: './addemployees.component.html',
  styleUrls: ['./addemployees.component.css']
})
export class AddemployeesComponent implements OnInit {
  positionList : {};
  departmentList : {};
  updateEmployee : {};
  myForm:FormGroup;
  id = 0;
  fileToUpload : File = null;
  uploadedFiles = [];
  imagePath : string;

  constructor(private service:HrService,private router:ActivatedRoute,private rut:Router,private messageService:MessageService) { }

  ngOnInit(){
    this.id = this.router.snapshot.params.id;

    if(this.id){
      this.service.employeeGetById(this.id).then(res => {
        this.updateEmployee = res;

        this.myForm = new FormGroup({
          empid : new FormControl(this.updateEmployee[0].empid,Validators.required),
          empcode : new FormControl(this.updateEmployee[0].empcode,Validators.required),
          ename : new FormControl(this.updateEmployee[0].ename,Validators.required),
          posid : new FormControl(this.updateEmployee[0].posid,Validators.required),
          did : new FormControl(this.updateEmployee[0].did,Validators.required),
          doj : new FormControl(this.updateEmployee[0].doj,Validators.required),
          qualification : new FormControl(this.updateEmployee[0].qualification,Validators.required),
          experience : new FormControl(this.updateEmployee[0].experience,Validators.required),
          gender : new FormControl(this.updateEmployee[0].gender,Validators.required),
          contact : new FormControl(this.updateEmployee[0].contact,Validators.required),
          email : new FormControl(this.updateEmployee[0].email,Validators.required),
          status : new FormControl(this.updateEmployee[0].status,Validators.required),
          enddate : new FormControl(this.updateEmployee[0].enddate,Validators.required),
          jobtype : new FormControl(this.updateEmployee[0].jobtype,Validators.required),
          image : new FormControl(this.uploadedFiles)
        })
        this.imagePath = this.updateEmployee[0].image;
      })
    }
    
    this.service.departmentGet().then(res => {
      this.departmentList = res;
    })

    this.service.positionGet().then(res => {
      this.positionList = res;
    })

    this.myForm = new FormGroup({
      empcode : new FormControl('',Validators.required),
      ename : new FormControl('',Validators.required),
      did : new FormControl('',Validators.required),
      posid : new FormControl('',Validators.required),
      doj : new FormControl('',Validators.required),
      qualification : new FormControl('',Validators.required),
      experience : new FormControl('',Validators.required),
      gender : new FormControl('',Validators.required),
      contact : new FormControl('',Validators.required),
      email : new FormControl('',Validators.required),
      status : new FormControl('',Validators.required),
      enddate : new FormControl('',Validators.required),
      jobtype : new FormControl('',Validators.required),
      image : new FormControl(this.uploadedFiles)
    })
  }

  handleFileInput(file : FileList){
    if(file.length > 0){
      this.fileToUpload = file.item(0);
      this.service.postFile(file.item(0)).subscribe(i => {
        this.uploadedFiles.push(i["name"]);
      })
    }
  }


  submit(){
    if(this.id){
      this.service.employeeUpdate(this.myForm.value).subscribe(res => {
        console.log(res);
        
      })
      this.rut.navigate(['/sidebar/hr/employees'])
    }  
    else{
      this.service.employeeAdd(this.myForm.value).subscribe(res => {
        console.log(res);
      })
      this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Successfully Added Employee' });

    }    
  }
}
