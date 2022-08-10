import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import {} from 'rxjs/observable';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  @Input()
  inputSideNav!: MatSidenav;

  isLoggedIn$!: Observable<boolean>;
  loggedinUser: string | null = '';

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isloggedIn
  }

  loggedin(){
    this.loggedinUser = localStorage.getItem('userName')
    return this.loggedinUser;
  }

  onLogout(){
    this.authService.logout();
  }

}
