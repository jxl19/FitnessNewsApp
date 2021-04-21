import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Login } from '../models/login';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ForgotServiceService {
  baseUrl= 'http://35.80.231.211:9095/reset/forgotpass';
  email:String = "";
  constructor(private http:HttpClient){

  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }



accessSpecificEmail(email:String) : Observable<Login>{
  return this.http.post<Login>(this.baseUrl, email, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )

  }
  //access our list of emails and look for a specific one
  //if not found, display a message that it isn't found
  //but for this part, just try to access the email

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
