import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin, UserRegister } from '../model/signInData';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  token: boolean = !!localStorage.getItem('token')
  public invalidUser: any
  private loggedIn = new BehaviorSubject<boolean>(this.token)
  
  baseUrl: string = environment.baseUrl 

  constructor(private router: Router, private http: HttpClient, private snackBar: MatSnackBar) { }

  getToken() {
    let token = localStorage.getItem('token');
    token = 'Bearer ' + token;
    return token;
  }

  authUser(data: UserLogin) {
    return this.http.post(this.baseUrl + '/api/login', data)
  }


  addUser(user: UserRegister){
    return this.http.post(this.baseUrl + "/api/register", user)
  }

  login(data: UserLogin){
    this.authUser(data).subscribe(
      (res: any) => {
        const user = res.data
        localStorage.setItem('token', user.token)
        localStorage.setItem('userName', user.name)
        this.loggedIn.next(true)
        this.router.navigate(["gig/view"])
      }, error => {
        this.invalidUser = JSON.stringify(error.error.data.error);
        const message = this.invalidUser.replaceAll('"', '')
        this.openSnackBar(message, 'Close')
      }
    );   
  }

  logout(){
    this.loggedIn.next(false);
    localStorage.removeItem('token')
    this.router.navigate(['/login']);
  }

  get isloggedIn(){
    return this.loggedIn.asObservable()
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
