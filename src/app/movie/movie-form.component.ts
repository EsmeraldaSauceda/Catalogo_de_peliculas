import {
  Component,
  OnInit
} from '@angular/core';

import {
  RouterLink
} from '@angular/router';

import {
  CommonModule,
  NgIf,
  JsonPipe
} from '@angular/common';

import { FormsModule } from '@angular/forms';

import { MovieService } from '../services/movie.service';

import { Movie } from '../models/movie';

@Component({
  selector: 'app-movie',

  standalone: true,

  imports: [
    CommonModule,
    RouterLink,
    NgIf,
    JsonPipe,
    FormsModule
  ],

  templateUrl: './movie-form.component.html',

  styleUrl: './movie-form.component.css'
})

export class MovieComponent implements OnInit {

  movie: Movie = {
    title: '',
    synopsis: '',
    year: 2025,
    director: '',
    genre: '',
    cover: ''
  };

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {

  }

  saveMovie() {
    this.movieService.addMovie(this.movie)
      .subscribe(() => {
        alert('Película agregada');
      });
  }

}