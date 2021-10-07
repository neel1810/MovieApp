import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieGenereComponent } from './movie-genere/movie-genere.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [{
  path:"",
  component:MovieGenereComponent
},
{
  path:"movies",
  component:MovieListComponent
},
{
  path:"movie-details/:id",
  component:MovieDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
