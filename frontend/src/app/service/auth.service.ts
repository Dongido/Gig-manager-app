import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin, UserRegister } from '../model/signInData';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public invalidUser: string = ''
  private loggedIn = new BehaviorSubject<boolean>(false)
  baseUrl: string = "http://testapi.orientexpress.com.ng"

  constructor(private router: Router, private http: HttpClient) { }

  authUser(data: UserLogin) {
    return this.http.post(this.baseUrl + '/api/login', data)
  }


  addUser(user: UserRegister){
    return this.http.post(this.baseUrl + "api/register", user)
  }

  login(data: UserLogin){
    this.authUser(data).subscribe(
      (res: any) => {
        console.log("Response: ", res)
        const user = res.data
        localStorage.setItem('token', user.token)
        localStorage.setItem('userName', user.name)
        this.loggedIn.next(true)
        this.router.navigate(["gig/view"])
      }, error => {
        console.log(error);
        this.invalidUser = JSON.stringify(error.error.data.error);
      }
    );   
  }

  logout(){
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  get isloggedIn(){
    return this.loggedIn.asObservable()
  }
}