import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap, finalize, delay } from 'rxjs/operators';

import { Router } from '@angular/router';

@Injectable()
  export class HttpErrorInterceptor implements HttpInterceptor {
    errorMessage!: string;
    constructor(
      private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // this.loaderService.show();

        return next.handle(request).pipe(tap(evt => {
            // custom api errors
            if (evt instanceof HttpResponse) {
              // this.loaderService.hide();
              if (evt.body.error === true) {
                this.errorMessage = evt.body.message ;
                // this.notification.publishMessages(this.errorMessage, 'danger', 1);
              }
            }
          }),

          catchError((error: HttpErrorResponse) => {
            // this.loaderService.hide();
            console.log(error);

            if (error.error instanceof ErrorEvent) {
              // client-side error
              this.errorMessage = `Error: ${error.error.message}`;
            } else {
              // server-side error

              switch (error.status) {
                case 503: {
                  this.errorMessage = 'An Internal Error Occured. Our Engineers Have Been Contacted';
                  // this.notification.publishMessages(this.errorMessage, 'danger', 1);
                  break;
                }
                case 500: {
                  this.errorMessage = 'An Internal Error Occured. Our Engineers Have Been Contacted';
                  // this.notification.publishMessages(this.errorMessage, 'danger', 1);
                  break;
                }
                case 400: {
                  this.errorMessage = error.error.message;
                  if (error.error.error === 'invalid_grant') {
                    // this.notification.publishMessages(error.error.errorDescription, 'danger', 1);
                  } else {
                    // this.notification.publishMessages(this.errorMessage, 'danger', 1);
                  }
                  break;
                }
                case 404: {
                  this.errorMessage = 'An Error Occured While Processing Your Request. Please Try Again';
                  // this.notification.publishMessages(this.errorMessage, 'danger', 1);
                  break;
                }
                case 401: {
                  // this.notification.publishMessages(error.error.message, 'danger', 1);
                  this.router.navigate(['/']);
                  break;
                }
                case 405: {
                  this.errorMessage = 'An Error Occured While Processing Your Request. Please Try Again';
                  // this.notification.publishMessages(this.errorMessage, 'danger', 1);
                  break;
                }
                case 0: {
                  this.errorMessage = 'A Connection Error Occured. Please Check Your Network Connection';
                  // this.notification.publishMessages(this.errorMessage, 'danger', 1);
                  break;
                }
              }
            }

            return throwError(error.error);
          })
        );
      }
  }