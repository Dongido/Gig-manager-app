import { Component, OnInit, Inject, Optional } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { GigsService } from '../service/gigs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-alert',
  templateUrl: './delete-alert.component.html',
  styleUrls: ['./delete-alert.component.css']
})
export class DeleteAlertComponent implements OnInit {

  id: number = 0;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    @Optional() public dialogRef: MatDialogRef<DeleteAlertComponent>,
    private gigsService: GigsService, private router: Router
  ) {
    this.id = data.id;
   }

  ngOnInit(): void {
    console.log('From delete alert: ', this.id)
  }

  no() {
    this.dialogRef.close();
  }

  yes() {
    this.gigsService.removeGig(this.id).subscribe(res => {
      console.log(this.id, " Gig has been deleted")
    }, error =>{
      console.log(error)
    })

    this.dialogRef.close(true);
    this.router.navigate(['/gig/view'])
  }

}
