import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup;

  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submitForm() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.error = '';

    const data = this.loginForm.value;

    this.http.post<any>('http://localhost:3000/login', data).subscribe({
      next: (res) => {
        console.log('Dữ liệu Server trả về:', res);
        this.loading = false;

        localStorage.setItem('token', res.accessToken);
        localStorage.setItem('user', JSON.stringify(res.user));

        this.router.navigateByUrl('/');
        alert('Đăng nhập thành công');
      },
      error: () => {
        this.loading = false;
        this.error = 'Sai email hoặc mật khẩu';
      },
    });
  }
}
