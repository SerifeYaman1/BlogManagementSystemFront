import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class DomInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let token =localStorage.getItem("token");
      let newRequest:HttpRequest<any>; //yapılan istek
      newRequest=request.clone({//kullanıcının yapmaya çalıştığı request
        headers:request.headers.set("Authorization","Bearer "+ token)
      }) 
      return next.handle(newRequest);
    }
  }
