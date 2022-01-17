import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { LoggingService } from '../shared/logging.service';
import { IProduct } from './products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productUrl: string =
    'https://my-json-server.typicode.com/sdove/angular-playground/master/products';

  constructor(private $http: HttpClient, private log: LoggingService) {}

  getProducts(): Observable<IProduct[]> {
    return this.$http.get<IProduct[]>(this.productUrl).pipe(
      tap((data) => this.log.info('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // client-side or network error.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // Unsuccessful reponse code from backend.
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    this.log.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
