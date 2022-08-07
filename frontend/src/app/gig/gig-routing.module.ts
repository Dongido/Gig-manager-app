import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GigsViewComponent } from './gigs-view/gigs-view.component';
import { GigsCreateStepOneComponent } from './gigs-create-step-one/gigs-create-step-one.component';
import { GigsCreateStepTwoComponent } from './gigs-create-step-two/gigs-create-step-two.component'

const routes: Routes = [
  {path: 'view', component: GigsViewComponent},
  {path: 'add-basic-data', component: GigsCreateStepOneComponent},
  {path: 'add-renumeration', component: GigsCreateStepTwoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GigRoutingModule { }
