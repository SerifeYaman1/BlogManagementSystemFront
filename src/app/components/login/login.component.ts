import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { BasicLayoutComponent } from '../basic-layout/basic-layout.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule,RouterModule,BasicLayoutComponent],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  role:string;
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
  private router:Router) { }

  ngOnInit(): void {
    this.createLoginForm();

  }
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      usernameOrEmail: ["", Validators.required],
      password: ["", Validators.required]
    })
  }
  login() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
      let user = Object.assign({}, this.loginForm.value)
 
      this.authService.login(user).subscribe(response => {
        this.router.navigate(['/home'])
        localStorage.setItem('token',response.token)
        console.log(response)
      })
    }else{
      console.log("Invalid form")
      return;
    }
  }
}
