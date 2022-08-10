import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';

const routes : Routes = [
  {path: '', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'gig', loadChildren:()=>import('./gig/gig.module')
  .then(mod=>mod.GigModule), canActivate: [AuthGuard]},
  {path: '', loadChildren:()=>import('./auth/auth.module')
  .then(mod=>mod.AuthModule)},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
