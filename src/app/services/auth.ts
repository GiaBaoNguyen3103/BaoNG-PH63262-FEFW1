import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  api = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post<any>(`${this.api}/login`, data);
  }
}
