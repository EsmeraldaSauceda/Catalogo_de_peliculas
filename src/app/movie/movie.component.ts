import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import {
  ActivatedRoute,
  RouterLink,
  Router
} from '@angular/router';

import {
  CommonModule,
  NgIf,
  JsonPipe
} from '@angular/common';

import { MovieService } from '../services/movie';

@Component({
  selector: 'app-movie',

  standalone: true,

  imports: [
    CommonModule,
    RouterLink,
    NgIf,
    JsonPipe
  ],

  templateUrl: './movie.component.html',

  styleUrl: './movie.component.css'
})

export class MovieComponent implements OnInit {

  movie: any = null;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.movieService.getMovie(id).subscribe({

      next: (data: any) => {

        console.log('PELÍCULA:', data);

        this.movie = data;
        this.cdr.detectChanges();

      },

      error: (error: any) => {

        console.error(error);

      }

    });

  }

  deleteMovie(): void {

    const confirmacion = confirm(
      '¿Deseas eliminar esta película?'
    );

    if (confirmacion) {

      this.movieService.deleteMovie(this.movie.id)
        .subscribe({

          next: () => {

            alert('Película eliminada');

            this.router.navigate(['/movies']);

          },

          error: (error) => {

            console.error(error);

          }

        });

    }

  }

}