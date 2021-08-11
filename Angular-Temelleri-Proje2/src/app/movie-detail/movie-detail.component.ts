import { ActivatedRoute, Routes } from '@angular/router';
import { MoviesComponent } from './../movies/movies.component';
import { Movie } from './../movie';
import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  @Input()
  movie!: Movie;

  ngOnInit(): void {
    this.get1Movie();
  }

  get1Movie(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieId(id).subscribe((movie) => {
      this.movie = movie;
    });
  }

  save(): void {
    this.movieService.update(this.movie).subscribe(() => {
      this.location.back();
    });
  }
}
