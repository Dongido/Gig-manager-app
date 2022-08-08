import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GigRoutingModule } from './gig-routing.module';
import { GigsViewComponent } from './gigs-view/gigs-view.component';
import { GigsCreateStepOneComponent } from './gigs-create-step-one/gigs-create-step-one.component';
import { GigsCreateStepTwoComponent } from './gigs-create-step-two/gigs-create-step-two.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    GigsViewComponent,
    GigsCreateStepOneComponent,
    GigsCreateStepTwoComponent
  ],
  imports: [
    CommonModule,
    GigRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatTableModule
  ]
})
export class GigModule { }
