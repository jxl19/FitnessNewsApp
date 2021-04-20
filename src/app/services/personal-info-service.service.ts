import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoServiceService {

  baseUrl = 'http://localhost:9095/user/'
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  createUser(user:any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'create', user, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  updateUser(id:any, userInfo:any): Observable<any> {
    return this.http.put<any>(this.baseUrl + 'update/' + id, userInfo, this.httpOptions)
    .pipe (
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
    return throwError(errorMessage);
  }
}
