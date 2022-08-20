import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message: string = ""

  constructor(private router: Router, private authServices: AuthService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit(RegisterForm: NgForm){
    if(RegisterForm.valid){
      this.authServices.addUser(RegisterForm.value).subscribe(() =>{
        this.message = 'User registered successfully'
        this.onReset(RegisterForm)
        this.router.navigate(['/login'])
      }, error =>{
        const message = error.error.message
        this.openSnackBar(message, 'Close')
        console.log(message)
      })
    }
  }

  onReset(form: NgForm){
    form.reset();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
