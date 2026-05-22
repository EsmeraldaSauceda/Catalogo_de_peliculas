import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MovieService } from '../services/movie';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, NgFor, RouterLink],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {

  movies: any[] = [];
  
  constructor(
    private movieService: MovieService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    console.log('Componente movies cargado');

    this.movieService.getMovies().subscribe({

      next: (data: any) => {

      console.log('DATA:', data);
      console.log('ES ARRAY:', Array.isArray(data));

      this.movies = data;

      console.log('MOVIES:', this.movies);

      this.cdr.detectChanges();

    },

      error: (error: any) => {

        console.error(error);

      }

    });

  }

}