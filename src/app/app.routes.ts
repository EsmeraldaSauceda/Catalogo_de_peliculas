import { Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { MovieComponent } from './movie/movie.component';
import { AddMovieComponent } from './components/add-movie/add-movie';
import { EditMovieComponent } from './components/edit-movie/edit-movie';

export const routes: Routes = [

  {
    path: '',
    component: IndexComponent
  },

  {
    path: 'movies', loadComponent: () => import('./movies/movies.component') .then(m => m.MoviesComponent)
  },

  {
    path: 'movie/:id',
    component: MovieComponent
  },

  {
    path: 'add-movie',
    component: AddMovieComponent
  },

  {
    path: 'edit-movie/:id',
    component: EditMovieComponent
  }

];