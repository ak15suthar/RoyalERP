import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyComponent } from './faculty/faculty.component';
import { ProfileComponent } from './profile/profile.component';
import { AddbatchComponent } from './faculty/batch/addbatch/addbatch.component';
import { BatchComponent } from './faculty/batch/batch.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultyRoutingModule { }
