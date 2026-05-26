import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  imports: [FormsModule],
  templateUrl: './add-movie.html',
  styleUrl: './add-movie.css',
})
export class AddMovieComponent {
  movie = {
    title: '',
    year: 0,
    synopsis: '',
    cover: '',
    director: '',
    genre: '',
  };

  constructor(
    private movieService: MovieService,
    private router: Router
  ) {}

  addMovie() {
    this.movieService.addMovie(this.movie).subscribe({
      next: () => {
        alert('Película agregada correctamente');
        this.router.navigate(['/movies']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
