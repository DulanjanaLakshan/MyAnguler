import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Movies } from '../models/movies';
import { environment } from 'src/envronments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private url='Movie';

  constructor(private http:HttpClient) { }

  public getMovies():Observable<Movies[]>{
    return this.http.get<Movies[]>(`${environment.apiUrl}/${this.url}`);
  }
}
