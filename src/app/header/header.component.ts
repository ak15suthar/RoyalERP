import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  myForm: FormGroup;
  constructor(private service: LoginService, private messageService: MessageService, private rut: Router) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  submit() {
    if (this.myForm.valid) {
      this.service.loginGet(this.myForm.value).subscribe(res => {
        console.log(res);
        // console.log("data" + res.data[0].did);
        if (res['data'] != '') {
          if (res.data[0].did == 6) {
            sessionStorage.setItem("islogin", "true");
            sessionStorage.setItem('uid', res.data[0].uid)
            this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Admin Login' });
            this.rut.navigate(['/sidebar/admin'])
          }
          else if (res.data[0].did == 4) {
            sessionStorage.setItem("islogin", "true");
            sessionStorage.setItem('uid', res.data[0].uid)
            this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'HR Login' });
            this.rut.navigate(['/sidebar/hr']);

          }
          else if (res.data[0].did == 7) {
            sessionStorage.setItem("islogin", "true");
            sessionStorage.setItem('uid', res.data[0].uid)
            this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Faculty Login' });
            this.rut.navigate(['/sidebar/faculty'])

          }
          else if(res.data[0].did == 8){
            sessionStorage.setItem("islogin","true");
            sessionStorage.setItem('uid',res.data[0].uid)
            this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Data Entry Login' });
            this.rut.navigate(['/sidebar/students'])
          }
          else {
            console.log('No Access');
          }
        }
        else {
          console.log('No Access');
          this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'No Access ' });
        }
      })
    }
    else {
      console.log("error");
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
    }

    // this.rut.navigate(['./sidebar'])
    // if (this.myForm.valid) {
    //   this.service.adminGet(this.myForm.value).subscribe(res => {
    //     if (res['data'] != "") {
    //       this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Successfully Login into Admin' });
    //       sessionStorage.setItem("islogin", "true");
    //       console.log("Bol" + res);
    //       this.rut.navigate(['./admin'])
    //     }
    //     else {
    //       this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Error Login into Admin' });
    //       console.log("error");

    //     }
    //   })

    //}
  }
}
