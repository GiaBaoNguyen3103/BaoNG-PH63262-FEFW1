import { HttpClient } from '@angular/common/http';
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
  isLoading: boolean = false;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
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
          // Validators.pattern(/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/),
        ],
      ],
    });
  }

  get title() {
    return this.addForm.get('title');
  }
  get author() {
    return this.addForm.get('author');
  }
  get views() {
    return this.addForm.get('views');
  }
  get releaseYear() {
    return this.addForm.get('releaseYear');
  }
  get genres() {
    return this.addForm.get('genres');
  }
  get imageUrl() {
    return this.addForm.get('imageUrl');
  }

  submitForm() {
    if (this.addForm.valid) {
      this.isLoading = true;
      this.errorMessage = null;
      console.log('Dữ liệu hợp lệ:', this.addForm.value);
      this.http
        .post(`http://localhost:3000/stories`, this.addForm.value)
        .subscribe({
          next: (data) => {
            this.isLoading = false;
            alert('Thêm sản phẩm thành công!!!');
            this.addForm.reset();
          },
          error: () => {
            this.isLoading = false;
            this.errorMessage = 'Thêm sản phẩm thất bại!!!';
          },
        });
    } else {
      console.log('Form không hợp lệ, vui lòng kiểm tra lại lỗi!');
      this.addForm.markAllAsTouched();
    }
  }
}
