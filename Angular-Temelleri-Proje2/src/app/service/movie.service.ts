import { Movies } from './../movie.datasource';
import { LogginService } from './loggin.service';
import { Movie } from './../movie';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiMoviesUrl = 'api/movies';

  constructor(private logginService: LogginService, private http: HttpClient) {}

  getAllMovies(): Observable<Movie[]> {
    this.logginService.add('MovieService : Merhaba,yeni bir mesajınız var.');
    return this.http.get<Movie[]>(this.apiMoviesUrl);
  }

  getMovieId(id: any): Observable<Movie> {
    this.logginService.add(
      'MovieService:id bilgisine göre filmin detay kısmı geliyor=' + id
    );
    return this.http.get<Movie>(this.apiMoviesUrl + '/' + id);
  }

  update(movie: Movie): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put(this.apiMoviesUrl, movie, httpOptions);
  }

  kaydet(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.apiMoviesUrl, movie);
  }

  delete(movie:Movie):Observable<Movie>{
    return this.http.delete<Movie>(this.apiMoviesUrl + '/'+ movie.id)

  }
}
