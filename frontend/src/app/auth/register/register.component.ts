import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message: string = ""

  constructor(private router: Router, private authServices: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(RegisterForm: NgForm){
console.log("data ", RegisterForm.value)
    if(RegisterForm.valid){
      this.authServices.addUser(RegisterForm.value).subscribe(() =>{
        this.message = 'User registered successfully'
        this.onReset(RegisterForm)
        this.router.navigate(['/login'])
      }, error =>{
        console.log(error)
      })
    }
  }

  onReset(form: NgForm){
    form.reset();
  }

}
