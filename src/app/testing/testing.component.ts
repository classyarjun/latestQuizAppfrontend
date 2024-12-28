
import { Component } from '@angular/core';
import { AdminService } from './../../service/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordResetRequest } from 'src/modal/password-reset-request';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})

export class TestingComponent {

  // passwordResetForm: FormGroup;
  // message: string = '';
  // userEmail: string = ''; // Replace this with actual user email

  // constructor(private fb: FormBuilder, private AdminService: AdminService) {
  //   this.passwordResetForm = this.fb.group(
  //     {
  //       password: ['', [Validators.required, Validators.minLength(6)]],
  //       confirmPassword: ['', [Validators.required]],
  //     },
  //     { validators: this.passwordsMatchValidator }
  //   );
  // }

  // // Custom Validator for Password Matching
  // passwordsMatchValidator(formGroup: FormGroup) {
  //   const password = formGroup.get('password')?.value;
  //   const confirmPassword = formGroup.get('confirmPassword')?.value;
  //   return password === confirmPassword ? null : { passwordsMismatch: true };
  // }

  // get password() {
  //   return this.passwordResetForm.get('password');
  // }

  // get confirmPassword() {
  //   return this.passwordResetForm.get('confirmPassword');
  // }

  // get passwordsDoNotMatch() {
  //   return this.passwordResetForm.hasError('passwordsMismatch');
  // }

  // onSubmit() {
  //   if (this.passwordResetForm.invalid) {
  //     return;
  //   }

  //   const request: PasswordResetRequest = {
  //     password: this.password?.value,
  //     confirmPassword: this.confirmPassword?.value,
  //   };

  //   this.AdminService.resetPassword(this.userEmail, request).subscribe(
  //     (response) => {
  //       this.message = response;
  //       this.passwordResetForm.reset();
  //     },
  //     (error) => {
  //       this.message = 'An error occurred. Please try again.';
  //       console.error(error);
  //     }
  //   );
  // }
}

