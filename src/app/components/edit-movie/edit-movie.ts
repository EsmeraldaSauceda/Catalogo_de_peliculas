import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-movie',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl: './edit-movie.html',

  styleUrl: './edit-movie.css'
})

export class EditMovieComponent implements OnInit {

  movie: any = {};

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.movieService.getMovie(id)
      .subscribe({

        next: (data: any) => {

          console.log('PELÍCULA EDITAR:', data);

          this.movie = data;

        },

        error: (error) => {

          console.error(error);

        }

      });

  }

  updateMovie(): void {

    const movieData = {

      title: this.movie.title,
      synopsis: this.movie.synopsis,
      year: this.movie.year,
      cover: this.movie.cover,
      genre: this.movie.genre,
      director: this.movie.director

    };

    console.log('ENVIANDO:', movieData);

    this.movieService
      .updateMovie(this.movie.id, movieData)
      .subscribe({

        next: () => {

          alert('Película actualizada');

          this.router.navigate(['/movies']);

        },

        error: (error) => {

          console.error('ERROR:', error);

        }

      });

  }

}