import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  detailData: any;
  myId: any;


  constructor(private activatedroute:ActivatedRoute,private movieservice:MoviesService) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(para =>{
      this.myId = para["id"]
     })
    this.getMovieDetailsData(this.myId)
  }

  getMovieDetailsData(movie_id:any)
{
  this.movieservice.getMovieDetails(movie_id).subscribe(  data=>{
    this.detailData=data
    console.log(this.detailData)

  },
  err=>console.log(err))
}

getImageUrl(posterPath:any){
  return `https://image.tmdb.org/t/p/w500/${posterPath}`;
}


}


