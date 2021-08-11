import { MovieService } from './../service/movie.service';
import { Movie } from './../movie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  movies: Movie[] = [];
  movieLength!: number;
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getAllDataMovie();
  }

  getAllDataMovie(): void {
    this.movieService
      .getAllMovies()
      .subscribe((data) =>{
        this.movies = data.slice(0, 7);
        this.movieLength=data.length;
      });
  }
}
//slice:servistan kaç adet resim gelecek o kısım unutma
// subscribe kısmında birden fazla özellik kullanma şekli unutma
