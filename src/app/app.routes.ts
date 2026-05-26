import { Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { MovieComponent } from './movie/movie-form.component';
import { AddMovieComponent } from './components/add-movie/add-movie';
import { EditMovieComponent } from './components/edit-movie/edit-movie';

export const routes: Routes = [

  {
    path: '',
    component: IndexComponent
  },

  {
    path: 'movies', loadComponent: () => import('./movies/movie-list.component') .then(m => m.MovieListComponent)
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