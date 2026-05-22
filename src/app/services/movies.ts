import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment';


export interface Movie {
   id?: number;
  title: string;
  synopsis: string;
  year?: number;
  director?: string;
  genre?: string;
  cover?: string;
}

@Injectable({ providedIn: 'root' })
export class MoviesService {

  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiUrl;

getMovies() {
  return this.http.get(`${this.apiUrl}/movies`);
}

  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/${id}`);
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.apiUrl, movie);
  }

  updateMovie(id: number, movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${this.apiUrl}/${id}`, movie);
  }
}
