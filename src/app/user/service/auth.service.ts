import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { User } from '../interface/user.interface';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlBase = environment.urlBase;
  //en js todos los objetos pasan por referencia
  private user?: User;

  http = inject(HttpClient);

  get currentUser(): User | undefined {
    if (!this.user) {
      return undefined
    }
    //return { ...this.user };
    return structuredClone(this.user);
  }


  login(username: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.urlBase}/1`).pipe(
      tap(user => {
        this.user = user;
      }),
      tap(user => {
        localStorage.setItem('token', user.id.toString())
      })
    )
  }

  chekAuthAdmin(): Observable<boolean> {

    const token = localStorage.getItem('token')

    if (!token) return of(false);

    return this.getUserById("1");
  }

  chekAuthLogeado(): Observable<boolean> {

    const token = localStorage.getItem('token')

    if (token) return of(false);

    return of(true);
  }


  getUserById(id: string): Observable<boolean> {
    return this.http.get<User>(`${this.urlBase}/${id}`).pipe(
      tap(user => this.user = user),
      map(user => user ? true : false),
      catchError(err => of(false))
    )
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem('token');
    //localStorage.clear()
  }

}
