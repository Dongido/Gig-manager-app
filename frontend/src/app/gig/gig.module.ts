import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { GigRoutingModule } from './gig-routing.module';
import { GigsViewComponent } from './gigs-view/gigs-view.component';
import { GigsCreateStepOneComponent } from './gigs-create-step-one/gigs-create-step-one.component';
import { GigsCreateStepTwoComponent } from './gigs-create-step-two/gigs-create-step-two.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { GigsCreateFormComponent } from './gigs-create-form/gigs-create-form.component';


@NgModule({
  declarations: [
    GigsViewComponent,
    GigsCreateStepOneComponent,
    GigsCreateStepTwoComponent,
    GigsCreateFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    GigRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatChipsModule,
    MatButtonModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class GigModule { }
