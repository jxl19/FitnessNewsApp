import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {
  baseUrl = 'http://localhost:8080/fileupload/file/'
  constructor(private http: HttpClient) { }
  uploadPDF(pdf: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, pdf)
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
    return throwError(errorMessage);
  }
}
