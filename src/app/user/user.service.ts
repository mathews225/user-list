import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl: string = "http://localhost:39623/api/Users/"

  constructor(
    private http: HttpClient
  ) {}

  list(): Observable<User[]> {
    return this.http.get(`${this.baseurl}`) as Observable<User[]>;
  }

  get(id: number): Observable<User> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<User>;
  }

  create(user: User): Observable<User> {
    return this.http.post(`${this.baseurl}`, user) as Observable<User>;
  }

  // change
  update(user: User): Observable<any> {
    return this.http.put(`${this.baseurl}/${user.id}`, user) as Observable<any>;
  }

  // remove
  delete(user: User): Observable<User> {
    return this.http.delete(`${this.baseurl}/${user.id}`) as Observable<User>;
  }
}
