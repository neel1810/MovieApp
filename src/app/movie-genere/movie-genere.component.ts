import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-genere',
  templateUrl: './movie-genere.component.html',
  styleUrls: ['./movie-genere.component.css']
})

export class MovieGenereComponent implements OnInit {
  genreData: any;

  constructor(private movieservice:MoviesService) { }

  ngOnInit(): void {
    this.getGenereData()
  }

getGenereData()
{
  this.movieservice.getGenere().subscribe(  data=>{
    this.genreData=data
    console.log(this.genreData)

  },
  err=>console.log(err))
}


}
