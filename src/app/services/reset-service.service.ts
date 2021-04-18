import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Newsletters } from '../models/newsletters';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class ResetServiceService {
  baseUrl= 'http://localhost:9095/reset/resetpass/';
  

  constructor(private http: HttpClient) { }
  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  postPasswordByToken(passwordtoken: Object): Observable<Token> {
    return this.http.post<Token>(this.baseUrl, passwordtoken, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

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
