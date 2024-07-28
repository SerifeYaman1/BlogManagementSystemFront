import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { HttpClient } from '@angular/common/http';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/token.model';
import { map, Observable, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { environment } from '../../environments/environment.prod';
import { AccessTokenPayload } from '../models/access-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.firebaseConfig.apiUrl}/auth`;
  
  constructor(private httpClient: HttpClient) { }
  
  login(user: LoginModel) {
    return this.httpClient
    .post<SingleResponseModel<TokenModel>>(`${this.apiUrl}/login`, user)
    .pipe(
      map(response => response.data),
      tap((tokenModel: TokenModel) => {
        localStorage.setItem('token', tokenModel.token)
      })
    )
  } 
  //kimlik doğrulama yapıp yapmadığına bakılır.
  isAuthenticated():boolean{
    const tokenPayload=this.tokenPayload();
    if(!tokenPayload){
      return false;
    }
    const nowUnixTimeInseconds=Math.floor(Date.now()/1000);
    if(nowUnixTimeInseconds> tokenPayload.exp){
      this.logout();
      return false;
    }
    return true;
  }
    
  logout():void{
  localStorage.removeItem('token');
  window.location.href='/login';
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  
  //payload kısmını okumak için kullanılır.
  tokenPayload():AccessTokenPayload | null{
    const token =this.getToken();
    if(!token) return null;

    const encodedPayload=this.getToken().split('.')[1];
    const decodedPayload=atob(encodedPayload) //base64 kodlarını decode eder.
    const payload=JSON.parse(decodedPayload) as AccessTokenPayload;
    return payload;
  }
  //yetkilendirme kontrolü
  isAuthorized(requiredRoles:string[]):boolean{
    // Kullanıcı kimlik doğrulaması yapılmış mı kontrol edilir
  if (!this.isAuthenticated()) {
    return false;
  }

  // Token payload'u al
  const payload = this.tokenPayload();
  if (!payload) {
    return false;
  }

  // Kullanıcının rolünü al
  const tokenRole = payload.roles;

  // Gerekli rollerden herhangi biri kullanıcıda mevcut mu kontrol edilir
  const hasRequiredRole = requiredRoles.includes(tokenRole);

  return hasRequiredRole;
  }
}