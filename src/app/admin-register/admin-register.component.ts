import { AdminService } from './../../service/admin.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})

export class AdminRegisterComponent {
  registerForm: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder, private AdminService: AdminService,private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  onRegister() {
    if (this.registerForm.invalid) {
      return;
    }

    const { name, email, mobileNumber, username, password, confirmPassword } = this.registerForm.value;

    if (password !== confirmPassword) {
      this.message = 'Passwords do not match!';
      return;
    }

    const admin = { name, email, mobileNumber, username, password, confirmPassword };
    this.AdminService.registerAdmin(admin).subscribe(
      (response) => {

        this.message = 'Admin registered successfully!';
        this.registerForm.reset();
        alert("Admin registered successfully..!");
        this.router.navigate(['/adminlogin']);
      },
      (error) => {
        this.message = 'Failed to register admin. Please try again.';
        console.error(error);
      }
    );
  }
}
