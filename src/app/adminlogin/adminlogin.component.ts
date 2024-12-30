// import { AdminService } from './../../service/admin.service';
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-adminlogin',
//   templateUrl: './adminlogin.component.html',
//   styleUrls: ['./adminlogin.component.css']
// })

// export class AdminloginComponent {
//   loginForm: FormGroup;
//   message: string = '';

//   constructor(private fb: FormBuilder, private AdminService: AdminService, private router: Router) {
//     this.loginForm = this.fb.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required],
//     });
//   }

//   onLogin() {
//     if (this.loginForm.invalid) {
//       return;
//     }

//     const { username, password } = this.loginForm.value;

//     this.AdminService.loginAdmin(username, password).subscribe(
//       (response) => {
//         this.message ='Admin Login successfully..!';
//         alert("Admin Login successfully..!");
//         this.router.navigate(['/adminssp=eJzj4tLP1TdILkqpqihQYDRgdGDw4kjLySzITiwqAQBm2Afs&q=flipkart&oq=filpcart&gs_lcrp=EgZjaHJvbWUqEggBEC4YChjHARixAxjRAxiABDIGCAAQRRg5MhIIARAuGAoYxwEYsQMY0QMYgAQyDwgCEAAYChiDARixAxiABDIMCAMQABgKGLEDGIAEMgwadmin-dashboardIBBAAGAoYsQMYgAQyDAgFEAAYChixAxiABDISCAYQABgKGIMBGLEDGIAEGIoFMgYIBxAFGEDSAQg0MTAzajBqN6gCALACAA&sourceid=chrome&ie=UTF-8']); // Navigate to the dashboard or perform any action on successful login
//       },
//       (error) => {
//         this.message = 'Invalid username or password. Please try again.';
//         console.error(error);
//       }
//     );
//   }
// }

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
  showPassword: boolean = false;

  constructor(private fb: FormBuilder, private AdminService: AdminService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    if (this.loginForm.invalid) {
      return;
    }

    const { username, password } = this.loginForm.value;

    this.AdminService.loginAdmin(username, password).subscribe(
      (response) => {
        this.message = 'Admin Login successfully..!';
        alert("Admin Login successfully..!");
        this.router.navigate(['/adminssp=eJzj4tLP1TdILkqpqihQYDRgdGDw4kjLySzITiwqAQBm2Afs&q=flipkart&oq=filpcart&gs_lcrp=EgZjaHJvbWUqEggBEC4YChjHARixAxjRAxiABDIGCAAQRRg5MhIIARAuGAoYxwEYsQMY0QMYgAQyDwgCEAAYChiDARixAxiABDIMCAMQABgKGLEDGIAEMgwadmin-dashboardIBBAAGAoYsQMYgAQyDAgFEAAYChixAxiABDISCAYQABgKGIMBGLEDGIAEGIoFMgYIBxAFGEDSAQg0MTAzajBqN6gCALACAA&sourceid=chrome&ie=UTF-8']);
      },
      (error) => {
        this.message = 'Invalid username or password. Please try again.';
        console.error(error);
      }
    );
  }
}

