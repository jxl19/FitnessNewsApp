import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Newsletters } from '../models/newsletters';

@Injectable({
  providedIn: 'root'
})
export class NewsletterServiceService {
  baseUrl= 'http://localhost:9095/newsletters/';
  constructor(private http: HttpClient) { }
  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  createNewsletter(newsletter:any): Observable<any>{
    return this.http.post<any>(this.baseUrl + "createnews", newsletter, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  getNewsletters(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "allnews")
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }
  getNewsletterById(id:any): Observable<any> {
    return this.http.get<any>(this.baseUrl + "get/" + id)
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
