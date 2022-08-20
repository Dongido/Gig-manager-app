import { Identifiers } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GigsService } from '../../service/gigs.service';
import {MatDialog} from '@angular/material/dialog';
import { DeleteAlertComponent } from '../../delete-alert/delete-alert.component'

@Component({
  selector: 'app-gigs-view',
  templateUrl: './gigs-view.component.html',
  styleUrls: ['./gigs-view.component.css']
})
export class GigsViewComponent implements OnInit {

  displayedColumns: string[] = ['id', 'role_name', 'company_name', 'updated_at', 'maximum_salary', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild('paginator') paginator! : MatPaginator
  @ViewChild(MatSort) matSort! : MatSort

  constructor(private gigsService: GigsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.displayGigs();
  }

  openDialog(id: any){
    const dialogRef = this.dialog.open(DeleteAlertComponent, {
      height: '250px',
      panelClass: 'delete_alert_box',
      data: {
        id: id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
        this.displayGigs();
    });
  }

  displayGigs(){
    this.gigsService.getGigs().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res.data)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.matSort
    }, error =>{
      console.log(error)
    })
  }

}
