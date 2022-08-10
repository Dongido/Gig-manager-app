import { Identifiers } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-gigs-view',
  templateUrl: './gigs-view.component.html',
  styleUrls: ['./gigs-view.component.css']
})
export class GigsViewComponent implements OnInit {

  displayedColumns: string[] = ['id', 'role_id', 'company_id', 'updated_at', 'maximum_salary'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild('paginator') paginator! : MatPaginator
  @ViewChild(MatSort) matSort! : MatSort

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getGigs().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res.data)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.matSort
    }, error =>{
      console.log(error)
    })
  }

}
