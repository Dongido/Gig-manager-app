import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { GigsService } from '../../service/gigs.service';
import { Router } from '@angular/router';
import {GigsData} from '../../model/gigs';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Tags {
  name: string;
}

@Component({
  selector: 'app-gigs-create-form',
  templateUrl: './gigs-create-form.component.html',
  styleUrls: ['./gigs-create-form.component.css']
})
export class GigsCreateFormComponent implements OnInit {
  // Sample Dropdown Select Data
  country: any[] = [
    {value: 'Nigeria', viewValue: 'Nigeria'},
    {value: 'USA', viewValue: 'United State of America'},
    {value: 'United Kingdom', viewValue: 'United Kingdom'},
  ];

  state: any[] = [
    {value: 'Lagos', viewValue: 'Lagos'},
    {value: 'Abuja', viewValue: 'Abuja'},
    {value: 'Texas', viewValue: 'Texas'},
    {value: 'England', viewValue: 'England'},
  ];

  company: any[] = [
    {value: '1', viewValue: 'Dagote group'},
    {value: '2', viewValue: 'Arise TV'},
  ];

  role: any[] = [
    {value: '1', viewValue: 'Technician'},
    {value: '2', viewValue: 'Software developer'},
  ];

  //--- End Sample Dropdown Select Data

  steps = 1

  gigFG = new FormGroup({
    role_id: new FormControl(''),
    company_id: new FormControl(''),
    country: new FormControl(''),
    state: new FormControl(''),
    address: new FormControl(''),
    tags: new FormControl(''),
    minimum_salary: new FormControl(''),
    maximum_salary: new FormControl('')
  })

  constructor(
    public fb: FormBuilder, 
    private gigService: GigsService, 
    private router: Router,
    private  snackBar: MatSnackBar ) { 
  }

  ngOnInit(): void {
  }

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: Tags[] = [];
  message: string = ''

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our tag
    if (value) {
      this.tags.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(tag: Tags): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  continue(){
    this.steps = this.steps + 1
  }

  back(){
    this.steps = this.steps - 1
  }

  onSubmit(){
    if(this.steps == 2){
      if(this.gigFG.valid){
        let formdata = this.gigFG.value
        
        this.gigService.addNewGig(formdata).subscribe(() =>{
          this.message = 'Gig added successfully'
          console.log(this.message)
          this.openSnackBar(this.message, 'Close')
          this.router.navigate(['/gig/view'])
        }, error =>{
          console.log(error)
          this.message = error.error.message
          this.openSnackBar(this.message, 'Close')
        })
      }
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
