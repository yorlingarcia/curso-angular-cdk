import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.API_URL;
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    this.http.post(`${this.apiUrl}/api/v1/auth/login`, {
      email,
      password,
    });
  }
}
