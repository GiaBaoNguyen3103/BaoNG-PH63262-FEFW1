import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  name = 'Nguyễn Gia Bảo';
  age = 20;

  handleClick() {
    alert(
      `Hello các con vợ!!! Anh tên là ${this.name} và anh ${this.age} tuổi`,
    );
  }
}
