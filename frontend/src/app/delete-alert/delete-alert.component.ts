import { Component, OnInit, Inject, Optional } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { GigsService } from '../service/gigs.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-alert',
  templateUrl: './delete-alert.component.html',
  styleUrls: ['./delete-alert.component.css']
})
export class DeleteAlertComponent implements OnInit {

  id: number = 0;
  message : string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    @Optional() public dialogRef: MatDialogRef<DeleteAlertComponent>,
    private gigsService: GigsService, private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.id = data.id;
   }

  ngOnInit(): void {
    
  }

  no() {
    this.dialogRef.close();
  }

  yes() {
    this.gigsService.removeGig(this.id).subscribe(res => {
      this.message = 'Gig was deleted successfully'
      this.openSnackBar(this.message, 'Close')
      this.dialogRef.close(true);
    }, error =>{
      console.log(error)
      this.message = error.error.message
      this.openSnackBar(this.message, 'Close')
    })    
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
