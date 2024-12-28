import { AdminService } from './../../service/admin.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent {

  forgotPasswordForm: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder, private AdminService: AdminService,private router: Router) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get email() {
    return this.forgotPasswordForm.get('email');
  }

  onSendOtp() {
    if (this.forgotPasswordForm.invalid) {
      return;
    }

    const userEmail = this.email?.value;

    this.AdminService.sendForgotPasswordOtp(userEmail).subscribe(
      (response) => {
        this.message = 'OTP has been sent to your email.';
        alert('OTP has been sent to your email.');
         this.router.navigate(['/confirmpass']);
      },
      (error) => {
        this.message = 'Failed to send OTP. Please try again.';
        console.error(error);
      }
    );
  }
}

