// import { Router } from '@angular/router';
// import { AdminService } from './../../service/admin.service';
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-confirm-pass',
//   templateUrl: './confirm-pass.component.html',
//   styleUrls: ['./confirm-pass.component.css']
// })
// export class ConfirmPassComponent {

//   resetPasswordForm: FormGroup;
//   message: string = '';

//   constructor(private fb: FormBuilder, private AdminService: AdminService) {
//     this.resetPasswordForm = this.fb.group(
//       {
//         otp: ['', [Validators.required]],
//         password: ['', [Validators.required, Validators.minLength(6)]],
//         confirmPassword: ['', [Validators.required]],
//       },
//       {
//         validators: this.passwordMatchValidator,
//       }
//     );
//   }

//   get otp() {
//     return this.resetPasswordForm.get('otp');
//   }

//   get password() {
//     return this.resetPasswordForm.get('password');
//   }

//   get confirmPassword() {
//     return this.resetPasswordForm.get('confirmPassword');
//   }

//   passwordMatchValidator(form: FormGroup) {
//     const password = form.get('password')?.value;
//     const confirmPassword = form.get('confirmPassword')?.value;
//     return password === confirmPassword ? null : { passwordMismatch: true };
//   }

// onResetPassword() {
//   if (this.resetPasswordForm.invalid) {
//     return;
//   }

//   const { otp, password, confirmPassword } = this.resetPasswordForm.value;

//   // const userEmail = localStorage.getItem('userEmail'); // Storing the user email after OTP request

//   const userEmail = "arjunrajput7531@gmail.com";

//   if (!userEmail) {
//     this.message = 'User email not found. Please try again.';
//     return;
//   }

//   // Now call the resetPassword method with 4 arguments
//   this.AdminService.resetPassword(userEmail, otp, password, confirmPassword).subscribe(
//     (response) => {
//       this.message = 'Password successfully reset!';
//     },
//     (error) => {
//       this.message = 'Failed to reset password. Please check your OTP or try again.';
//       console.error(error);
//     }
//   );
// }
// }

//? test - test function to test the password =========================================

// import { AdminService } from './../../service/admin.service';
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Admin } from 'src/modal/admin';
// import { Router } from '@angular/router';


// @Component({
//   selector: 'app-confirm-pass',
//   templateUrl: './confirm-pass.component.html',
//   styleUrls: ['./confirm-pass.component.css']
// })
// export class ConfirmPassComponent {

//   admins: Admin[] = [];
//   errorMessage: string = '';
//   resetPasswordForm: FormGroup;
//   message: string = '';

//   constructor(private fb: FormBuilder, private AdminService: AdminService, private router: Router) {
//     this.resetPasswordForm = this.fb.group(
//       {
//         otp: ['', [Validators.required]],
//         password: ['', [Validators.required, Validators.minLength(6)]],
//         confirmPassword: ['', [Validators.required]],
//       },
//       {
//         validators: this.passwordMatchValidator,
//       }
//     );
//   }

//   ngOnInit(): void {
//     this.fetchAdmins();
//   }

//   fetchAdmins(): void {
//     this.AdminService.getAdmin().subscribe(
//       (data) => {
//         this.admins = data;
//         console.log('Fetched Admin Data:', data); // Data ko console mein print karna
//       },
//       (error) => {
//         this.errorMessage = 'Failed to fetch admin data';
//         console.error('Error fetching admins:', error); // Error ko console mein print karna
//       }
//     );
//   }

//   get otp() {
//     return this.resetPasswordForm.get('otp');
//   }

//   get password() {
//     return this.resetPasswordForm.get('password');
//   }

//   get confirmPassword() {
//     return this.resetPasswordForm.get('confirmPassword');
//   }

//   passwordMatchValidator(form: FormGroup) {
//     const password = form.get('password')?.value;
//     const confirmPassword = form.get('confirmPassword')?.value;
//     return password === confirmPassword ? null : { passwordMismatch: true };
//   }

// onResetPassword() {
//   if (this.resetPasswordForm.invalid) {
//     return;
//   }

//   const { otp, password, confirmPassword } = this.resetPasswordForm.value;

//   // const userEmail = localStorage.getItem('userEmail'); // Storing the user email after OTP request

//   const userEmail = this.admins[0].email;

//   if (!userEmail) {
//     this.message = 'User email not found. Please try again.';
//     return;
//   }

//   // Now call the resetPassword method with 4 arguments
//   this.AdminService.resetPassword(userEmail, otp, password, confirmPassword).subscribe(
//     (response) => {
//       this.message = 'Password reset successfully..!';
//       this.router.navigate(['/adminlogin']);
//     },
//     (error) => {
//       this.message = 'Failed to reset password. Please check your OTP or try again.';
//       console.error(error);
//     }
//   );
// }
// }

//? =============== multiple admin for test =================

import { AdminService } from './../../service/admin.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Admin } from 'src/modal/admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-pass',
  templateUrl: './confirm-pass.component.html',
  styleUrls: ['./confirm-pass.component.css']
})
export class ConfirmPassComponent {

  admins: Admin[] = [];
  errorMessage: string = '';
  resetPasswordForm: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder, private AdminService: AdminService, private router: Router) {
    this.resetPasswordForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]], // Added email input
        otp: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: this.passwordMatchValidator,
      }
    );
  }

  ngOnInit(): void {
    this.fetchAdmins();
  }

  fetchAdmins(): void {
    this.AdminService.getAdmin().subscribe(
      (data) => {
        this.admins = data;
        // console.log('Fetched Admin Data:', data);
      },
      (error) => {
        this.errorMessage = 'Failed to fetch admin data';
        console.error('Error fetching admins:', error);
      }
    );
  }

  get email() {
    return this.resetPasswordForm.get('email');
  }

  get otp() {
    return this.resetPasswordForm.get('otp');
  }

  get password() {
    return this.resetPasswordForm.get('password');
  }

  get confirmPassword() {
    return this.resetPasswordForm.get('confirmPassword');
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onResetPassword() {
    if (this.resetPasswordForm.invalid) {
      return;
    }

    const { email, otp, password, confirmPassword } = this.resetPasswordForm.value;

    // Check if email exists in the admins list
    const admin = this.admins.find((admin) => admin.email === email);

    if (!admin) {
      this.message = 'No admin found with the provided email. Please try again.';
      return;
    }

    // Call the resetPassword method for the specific admin
    this.AdminService.resetPassword(email, otp, password, confirmPassword).subscribe(
      (response) => {
        this.message = `Password reset successfully for ${email}!`;
        alert("Password reset successfully");
        this.router.navigate(['/adminlogin']);
      },
      (error) => {
        this.message = 'Failed to reset password. Please check your OTP or try again.';
        console.error(error);
      }
    );
  }
}
