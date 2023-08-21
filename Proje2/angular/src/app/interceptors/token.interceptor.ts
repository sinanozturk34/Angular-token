import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //next ile aynı net core daki next middleware calısma mantıgı aynı

    const token = localStorage.getItem('token');

    if(token != undefined){
      const authReg = request.clone({
        headers:request.headers.set('Authorization',`Bearer $(token)`)
      })
    } 


    return next.handle(request);

  }
}
