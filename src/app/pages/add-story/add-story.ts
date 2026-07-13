import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-story',
  imports: [ReactiveFormsModule],
  templateUrl: './add-story.html',
  styleUrl: './add-story.css',
})
export class AddStory {
  addForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      author: ['', [Validators.required, Validators.minLength(2)]],
      views: ['', [Validators.required, Validators.min(0)]],
      releaseYear: [
        '',
        [
          Validators.required,
          Validators.min(1000),
          Validators.max(new Date().getFullYear() + 1),
        ],
      ],
      genres: ['', [Validators.required, Validators.minLength(2)]],
      imageUrl: [
        '',
        [
          Validators.required,
          Validators.pattern(/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/),
        ],
      ],
    });
  }

  get f() {
    return this.addForm.controls;
  }

  submitForm() {
    if (this.addForm.valid) {
      console.log('Dữ liệu hợp lệ:', this.addForm.value);
    } else {
      console.log('Form không hợp lệ, vui lòng kiểm tra lại lỗi!');
      this.addForm.markAllAsTouched(); // Đánh dấu tất cả để hiện lỗi lên giao diện
    }
  }
}
