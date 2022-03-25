import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminauthguardGuard } from './adminauthguard.guard';


const routes: Routes = [
  // {path:'admin',component:AdminComponent,canActivate:[AdminauthguardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
