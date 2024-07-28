import { HostAttributeToken, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AUTH_ERROR_REDIRECT_URL_TOKEN } from '../providers/auth.provider';


export const loginGuard: CanActivateFn = (route, state) => {
 const authService=inject(AuthService)
 const router=inject(Router);
 const authErrorRedirectUrl=inject(AUTH_ERROR_REDIRECT_URL_TOKEN);
 if(!authService.isAuthenticated){
    router.navigateByUrl(authErrorRedirectUrl);
    return false;
 }
 return true;
};