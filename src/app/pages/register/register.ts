import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) {
    this.registerForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      },
      { validators: this.passwordMatchValidator() },
    );
  }

  get f() {
    return this.registerForm.controls;
  }

  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get('password')?.value;
      const confirmPassword = control.get('confirmPassword')?.value;

      return password === confirmPassword ? null : { passwordMismatch: true };
    };
  }
  errorMessage: string = '';

  submitForm() {
    if (this.registerForm.valid) {
      this.errorMessage = '';
      const email = this.registerForm.get('email')?.value;

      this.http
        .get<any[]>(`http://localhost:3000/users?email=${email}`)
        .subscribe({
          next: (users) => {
            if (users.length > 0) {
              this.errorMessage = 'Email đã tồn tại';
              return;
            }

            const { confirmPassword, ...userData } = this.registerForm.value;

            this.http
              .post('http://localhost:3000/register', userData)
              .subscribe({
                next: () => {
                  this.registerForm.reset();
                  alert('Đăng ký thành công');
                  this.router.navigate(['/login']);
                },
                error: (err) => {
                  this.errorMessage =
                    err.error?.message || 'Có lỗi xảy ra khi đăng ký';
                },
              });
          },
          error: () => {
            this.errorMessage = 'Không thể kiểm tra email. Vui lòng thử lại!';
          },
        });
    } else {
      console.log('Form không hợp lệ, vui lòng kiểm tra lại lỗi!');
      this.registerForm.markAllAsTouched();
    }
  }
}
