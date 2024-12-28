import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestReadmeComponent } from './test-readme/test-readme.component';
import { QuizTestComponent } from './quiz-test/quiz-test.component';
import { TestingComponent } from './testing/testing.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminAllUsersComponent } from './admin-all-users/admin-all-users.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SuccesspageComponent } from './successpage/successpage.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { ConfirmPassComponent } from './confirm-pass/confirm-pass.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DashboardComponent,
    TestReadmeComponent,
    QuizTestComponent,
    TestingComponent,
    AdminloginComponent,
    AdminDashboardComponent,
    AdminAllUsersComponent,
    ContactUsComponent,
    SuccesspageComponent,
    AdminRegisterComponent,
    ConfirmPassComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

