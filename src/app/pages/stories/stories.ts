import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Story } from '../../models/story';

@Component({
  selector: 'app-stories',
  imports: [RouterLink],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories {
  stories: Story[] = [];
  isLoading: boolean = true;
  errorMessage: string | null = null;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getStories();
  }

  getStories() {
    this.isLoading = true;
    this.errorMessage = null;
    this.http.get<Story[]>(`http://localhost:3000/stories`).subscribe({
      next: (data) => {
        this.stories = data;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = 'Không thể kết nối máy chủ!!!! LỖI';
      },
    });
  }

  deleteStory(id: number) {
    const confirmDelete = confirm('Bạn chắc chắn muốn xóa sản phầm này????');
    if (!confirmDelete) return;

    this.http.delete(`http://localhost:3000/stories/${id}`).subscribe({
      next: () => {
        this.stories = this.stories.filter((story) => story.id !== id);
        alert('Xóa sản phẩm thành công');
      },
      error: () => {
        alert('Xóa sản phầm thất bại!!!! LỖI');
      },
    });
  }
}
