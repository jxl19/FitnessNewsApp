import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Newsletters } from '../models/newsletters';

@Injectable({
  providedIn: 'root'
})
export class NewsletterServiceService {
  baseUrl= 'http://localhost:3000/newsletters/';
  constructor(private http: HttpClient) { }
  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getNewsletters(): Observable<Newsletters> {
    return this.http.get<Newsletters>(this.baseUrl)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }
  getNewsletterById(id:number): Observable<Newsletters> {
    return this.http.get<Newsletters>(this.baseUrl + id)
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
