import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieData: any;
  @Input() myvalue: any;

  constructor(private movieservice:MoviesService) { }

  ngOnInit(): void {
    this.getMovieList()
  }

  getMovieList()
  {
    this.movieservice.getMovie(this.myvalue).subscribe(data=>{
      this.movieData=data
      console.log(this.movieData)

    },
    err=>console.log(err))
  }

  getImageUrl(posterPath:any){
    return `https://image.tmdb.org/t/p/w500/${posterPath}`;
  }

}
