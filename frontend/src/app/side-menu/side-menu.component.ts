import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import {} from 'rxjs/observable';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  isLoggedIn$!: Observable<boolean>;
  loggedinUser: string | null = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isloggedIn
  }

}
