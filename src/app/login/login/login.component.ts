import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm:FormGroup;
  constructor(private service:AdminService,private messageService:MessageService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      email : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required)
    })
  }

  submit(){
    // this.service.adminGet(this.myForm.value).subscribe(res => {
    //   console.log("Bol"+res);
      
    // })
    // this.messageService.add({severity:'success', summary: 'Success Message', detail:'Successfully Login into Admin'});

  }
}
