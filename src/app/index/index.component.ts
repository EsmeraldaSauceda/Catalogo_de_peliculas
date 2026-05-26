import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})

export class IndexComponent implements OnInit {

  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {

    this.movieService.getMovies().subscribe({

      next: (data: any) => {

        console.log(data);

        this.movies = data;

      },

      error: (error: any) => {

        console.error(error);

      }

    });

  }


}