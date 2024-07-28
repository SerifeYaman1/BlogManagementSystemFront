import { HttpInterceptorFn } from '@angular/common/http';
import { TokenService } from '../services/token.service';
import { inject } from '@angular/core';
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Interceptor çalışıyor');
  const tokenService = inject(TokenService);

  let newRequest = req.clone({
    setHeaders: { Authorization: 'Bearer ' + tokenService.getToken() },
  });

  return next(newRequest);
};
