import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'http://127.0.0.1:8000/api/movies';

  constructor(private http: HttpClient) {}

  // Obtener todas las películas
  getMovies() {
    return this.http.get(this.apiUrl);
  }

  // Obtener una sola película
  getMovie(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

   // Agregar película
  addMovie(movie: any) {
    return this.http.post(this.apiUrl, movie);
  }

  // Editar película
  updateMovie(id: number, movie: any) {
    return this.http.put(`${this.apiUrl}/${id}`, movie);
  }

  deleteMovie(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}