import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HrService } from '../../hr.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-addposition',
  templateUrl: './addposition.component.html',
  styleUrls: ['./addposition.component.css']
})
export class AddpositionComponent implements OnInit {
  myForm: FormGroup;
  id = 0;
  updatePosition: {};
  constructor(private service: HrService, private route: ActivatedRoute, private messageService: MessageService,private rut:Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;

    if (this.id) {
      this.service.positionGetById(this.id).then(res => {
        this.updatePosition = res;

        this.myForm = new FormGroup({
          posid: new FormControl(this.updatePosition[0].posid, Validators.required),
          poscode: new FormControl(this.updatePosition[0].poscode, Validators.required),
          posname: new FormControl(this.updatePosition[0].posname, Validators.required),
          posshort: new FormControl(this.updatePosition[0].posshort, Validators.required),
          poslevel: new FormControl(this.updatePosition[0].poslevel, Validators.required),
          description: new FormControl(this.updatePosition[0].description, Validators.required),
          status: new FormControl(this.updatePosition[0].status, Validators.required)
        })
      });
    }

    this.myForm = new FormGroup({
      poscode: new FormControl('', Validators.required),
      posname: new FormControl('', Validators.required),
      posshort: new FormControl('', Validators.required),
      poslevel: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)
    })
  }

  submit() {
    if (this.id) {
      this.service.positionUpdate(this.myForm.value).subscribe(res => {
        console.log("Updated");
      })
      this.rut.navigate(['/hr/positions/listpositions'])
    }
    else {
      this.service.positionAdd(this.myForm.value).subscribe(res => {
        console.log(res);
        console.log(this.myForm.value);
      })
      this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Successfully Added Category' });
    }
  }
}
