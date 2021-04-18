import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  baseUrl = 'http://localhost:9095/api/users/'
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getUsers(): Observable<Login> {
    return this.http.get<Login>(this.baseUrl)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }
  loginUser(ids:any): Observable<Login> {
    return this.http.get<Login>(this.baseUrl + ids)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }
  // Error handling
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  
}

