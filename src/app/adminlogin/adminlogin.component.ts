import { AdminService } from './../../service/admin.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})

export class AdminloginComponent {
  loginForm: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder, private AdminService: AdminService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      return;
    }

    const { username, password } = this.loginForm.value;

    this.AdminService.loginAdmin(username, password).subscribe(
      (response) => {
        this.message ='Admin Login successfully..!';
        alert("Admin Login successfully..!");
        this.router.navigate(['/admin-dashboard']); // Navigate to the dashboard or perform any action on successful login
      },
      (error) => {
        this.message = 'Invalid username or password. Please try again.';
        console.error(error);
      }
    );
  }
}
