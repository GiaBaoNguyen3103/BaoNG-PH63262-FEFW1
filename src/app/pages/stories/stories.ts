import { Component } from '@angular/core';

@Component({
  selector: 'app-stories',
  imports: [],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories {
  stories = [
    {
      title: 'One Piece',
      author: 'Oda',
      views: 10000000,
      releaseYear: 1997,
      genres: ['Action', 'Adventure', 'Fantasy', 'Shounen'],
      imageUrl:
        'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/07/one-piece-franchise-poster.jpg',
    },
    {
      title: 'Naruto',
      author: 'Kishimoto',
      views: 1900000,
      releaseYear: 1999,
      genres: ['Action', 'Adventure', 'Fantasy', 'Shounen'],
      imageUrl:
        'https://tse2.mm.bing.net/th/id/OIP.dqQV8SLMZsqnhaSaY_zrdgHaL8?cb=thfc1falcon4&rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      title: 'Doraemon',
      author: 'Fujiko F Fujio',
      views: 2700000,
      releaseYear: 1969,
      genres: ['Comedy', 'Sci-Fi', 'Children', 'Slice of Life'],
      imageUrl:
        'https://i.pinimg.com/736x/ef/2b/04/ef2b045bce82875d5cef98aa835b5548.jpg',
    },
    {
      title: 'Dragon Ball',
      author: 'Toriyama Akira',
      views: 1270000,
      releaseYear: 1984,
      genres: ['Action', 'Adventure', 'Martial Arts', 'Shounen'],
      imageUrl:
        'https://thf.bing.com/th/id/R.035d7860abbd75f012cb6f2e59d48373?rik=Cbt89S9sbKqQMQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2015%2f07%2fdragon-ball-z-free-wallpaper-download.jpg&ehk=4jqGnTq1b5wx2APSOjj%2bnu5GlBL3FvDoEKJk4AZetco%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      title: 'Bleach',
      author: 'Kubo Taito',
      views: 240000,
      releaseYear: 2001,
      genres: ['Action', 'Adventure', 'Supernatural', 'Shounen'],
      imageUrl: 'https://wallpapercave.com/wp/UZbwoVk.jpg',
    },
    {
      title: 'Attack On Titan',
      author: 'Isayama Hajime',
      views: 540000,
      releaseYear: 2009,
      genres: ['Action', 'Dark Fantasy', 'Mystery', 'Shounen'],
      imageUrl:
        'https://i.pinimg.com/originals/aa/5e/da/aa5edaba6a718b8ac46d54ce4af8100d.jpg',
    },
  ];
}
