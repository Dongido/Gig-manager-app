import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GigsData} from '../model/gigs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GigsService {

  baseUrl: string = environment.baseUrl 

  constructor(private router: Router, private http: HttpClient) { }

  getToken() {
    let token = localStorage.getItem('token');
    token = 'Bearer ' + token;
    return token;
  }

  // Improvement- Gigs will be fetched based on loggedin user id
  getGigs(){
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers = headers.append('Authorization', this.getToken());

    return this.http.get(this.baseUrl + '/api/gigs', { headers: headers })
  }  

  addNewGig(data: GigsData){
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', this.getToken());

    return this.http.post(this.baseUrl + "/api/gigs", data, { headers: headers })
  }

  removeGig(id: any){
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers = headers.append('Authorization', this.getToken());

    return this.http.delete(this.baseUrl + "/api/gigs/" + id, { headers: headers })
  }
}
