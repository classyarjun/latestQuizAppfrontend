import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestReadmeComponent } from './test-readme/test-readme.component';
import { QuizTestComponent } from './quiz-test/quiz-test.component';
import { TestingComponent } from './testing/testing.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminAllUsersComponent } from './admin-all-users/admin-all-users.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SuccesspageComponent } from './successpage/successpage.component';
import { ConfirmPassComponent } from './confirm-pass/confirm-pass.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';


const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'test-readme', component:TestReadmeComponent },
  { path: 'quiz-test', component:QuizTestComponent },
  { path: 'testing', component:TestingComponent },
  { path: 'admin-dashboard', component:AdminDashboardComponent},
  { path: 'admin-all-users', component:AdminAllUsersComponent },
  { path: 'contact-us', component:ContactUsComponent},
  { path: 'successpage', component:SuccesspageComponent},

  { path: 'adminregister', component: AdminRegisterComponent },
  { path: 'adminlogin', component:AdminloginComponent },
  { path: 'verifyemail', component: VerifyEmailComponent },
  { path: 'confirmpass', component: ConfirmPassComponent },

];

@NgModule({
  // declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }





// gs_ssp=eJzj4tLP1TdILkqpqihQYDRgdGDw4kjLySzITiwqAQBm2Afs&q=flipkart&oq=filpcart&gs_lcrp=EgZjaHJvbWUqEggBEC4YChjHARixAxjRAxiABDIGCAAQRRg5MhIIARAuGAoYxwEYsQMY0QMYgAQyDwgCEAAYChiDARixAxiABDIMCAMQABgKGLEDGIAEMgwIBBAAGAoYsQMYgAQyDAgFEAAYChixAxiABDISCAYQABgKGIMBGLEDGIAEGIoFMgYIBxAFGEDSAQg0MTAzajBqN6gCALACAA&sourceid=chrome&ie=UTF-8
