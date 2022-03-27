import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GhUser } from '../models/ghUsers';
import { GhRepositorio } from '../models/ghRepositorio';

@Injectable()
export class GhApiService {

  private readonly baseUrl: string = `https://api.github.com/users`

  constructor(
    private http: HttpClient
  ) { }

  findUser(username: string): Observable<GhUser> {
    return this.http.get<GhUser>(`${this.baseUrl}/${username}`)
  }

  findUserRepositorio(username: string) : Observable<GhRepositorio[]>{
    return this.http.get<GhRepositorio[]>(`${this.baseUrl}/${username}/repos`)
  }
}
