import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes : Routes = [
  {path: '', component: DashboardComponent},
  {path: 'gig', loadChildren:()=>import('./gig/gig.module')
  .then(mod=>mod.GigModule)}
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
