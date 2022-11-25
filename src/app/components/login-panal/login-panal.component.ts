import { Component,OnInit } from '@angular/core';

import { Movies } from 'src/app/models/movies';
import { MoviesService } from 'src/app/services/movies.service';
@Component({
  selector: 'app-login-panal',
  templateUrl: './login-panal.component.html',
  styleUrls: ['./login-panal.component.css']
})
export class LoginPanalComponent {
  movies: Movies[]=[];

  constructor(private movieService:MoviesService){ }

  ngOnInit():void{
    this.movieService.getMovies().subscribe((result:Movies[])=>(this.movies=result));
  }
}
