import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  getMovieDetailsData() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  //this function is for getting genere names
  getGenere()
  {
    return this.http.get("https://api.themoviedb.org/3/genre/movie/list?api_key=68e82445c8842ba8616d0f6bf0e97a41").pipe(map((data: any)=>data.genres))

  }

  //this function is for getting genere based movie list
  getMovie(id:any)
  {
    return this.http.get("https://api.themoviedb.org/3/genre/"+id+"/movies?api_key=68e82445c8842ba8616d0f6bf0e97a41")
    .pipe(map((data: any)=>data.results))

  }

  getMovieDetails(movie_id:any)
  {
    return this.http.get("https://api.themoviedb.org/3/movie/"+movie_id+"?api_key=68e82445c8842ba8616d0f6bf0e97a41")

  }

}
