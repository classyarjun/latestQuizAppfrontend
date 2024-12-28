import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Admin } from 'src/modal/admin';
import { PasswordResetRequest } from './../modal/password-reset-request';
import { environment } from 'src/Environment/environment';

const NAV_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  // private baseUrl = 'http://localhost:8080/api/admin'; // Backend API base URL

//  apiUrl: 'http://localhost:8080/api'

  constructor(private http: HttpClient) {}

//? get All Admin

getAdmin(): Observable<Admin[]> {
  return this.http.get<Admin[]>(`${NAV_URL}/admin/all`);
}

 // ? Register Admin
  registerAdmin(admin: Admin): Observable<string> {
    return this.http.post<string>(`${NAV_URL}/admin/register`, admin);
  }

  //? Login Admin
  loginAdmin(username: string, password: string): Observable<string> {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.http.post<string>(`${NAV_URL}/admin/login`, null, { params });
  }

  // Forgot Password
  sendForgotPasswordOtp(userEmail: string): Observable<string> {
    return this.http.post<string>(`${NAV_URL}/admin/verifyMail/${userEmail}`, null);
  }
  // Verify Forgot Password OTP
  validateForgotPasswordOtp(otp: string, userEmail: string): Observable<string> {
    const params = new HttpParams()
      .set('otp', otp)
      .set('userEmail', userEmail);

    return this.http.post<string>(`${NAV_URL}/admin/verifyForgotPasswordOtp`, null, { params });
  }

  resetPassword(userEmail: string,otp: string, password: string,confirmPassword: string): Observable<string> {
    const url = `${NAV_URL}/admin/resetPassword/${userEmail}`;
    const body = { otp, password, confirmPassword };
    return this.http.post<string>(url, body);
  }

}
