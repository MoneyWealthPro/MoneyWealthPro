import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Observable, of } from "rxjs";


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  authenticationToken: any;

  constructor() {
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
      
    this.authenticationToken = sessionStorage.getItem("user_token");
   
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authenticationToken}`
      }
    });
    return next.handle(request);
  }
}
