import { MovieService } from './../service/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from './../movie';
import { Movies } from '../movie.datasource';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  constructor(private service: MovieService) {}

  title = 'Movie List';
  movies = Movies;
  selectedMovie!: Movie;
  movie:any;

  ngOnInit(): void {
    this.getMovies();
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  getMovies(): void {
    this.service.getAllMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }
  kaydet(name: string, imageUrl: string, description: string): void {
    this.service
      .kaydet({
        name,
        imageUrl,
        description,
      } as Movie)
      .subscribe((data) => {
        this.movies.push(data);
      });
  }

  delete(movie: Movie): void {
    this.movies = this.movies.filter((m) => m !== this.movie);//movies ön yüzdeden silmek için
    this.service.delete(movie).subscribe();//tüm yerden silmek için burayı kullan.
    alert('Film silindi...');
  }
}
