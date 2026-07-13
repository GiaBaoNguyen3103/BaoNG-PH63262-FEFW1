import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  submitForm() {
    if (this.registerForm.valid) {
      console.log('Dữ liệu hợp lệ:', this.registerForm.value);
    } else {
      console.log('Form không hợp lệ, vui lòng kiểm tra lại lỗi!');
      this.registerForm.markAllAsTouched(); // Đánh dấu tất cả để hiện lỗi lên giao diện
    }
  }
}
