//Eğer authenticated değilse yönlendirilecek sayfa 

import { InjectionToken, Provider } from "@angular/core";

export const AUTH_ERROR_REDIRECT_URL_TOKEN=new InjectionToken<string>
('AUTH_ERROR_REDIRECT_URL');

export function provideAuthErrorRedirectUrl(url:string){
    return {
        provide:AUTH_ERROR_REDIRECT_URL_TOKEN,
        useValue:url,
    }as Provider;
}
//verilen string ile kayıt edilecek.