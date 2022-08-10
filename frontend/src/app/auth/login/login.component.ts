import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidUser = ''

  constructor(private router: Router, private authServices: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(siginInForm: NgForm){
    if(siginInForm.valid){
      console.log("valid dd")
      this.authServices.login(siginInForm.value)
    }
    else {
      console.log("invalid dd")
      this.invalidUser = this.authServices.invalidUser
    }
  }
}
