import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ 
  providedIn: 'root'
})

export class AuthService {
  uri = '';
  token;
  
  constructor(private http: HttpClient,private router: Router) { }
  
  loggedIn = false

  login(email: string, password: string) {
    this.http.post(this.uri + '/authenticate', {email: email, password: password}).subscribe((resp: any) => {
      this.router.navigate(['profile']);localStorage.setItem('auth_token', resp.token);
    })
    this.loggedIn = true
  }

  logout() {
    localStorage.removeItem('token')
    this.loggedIn = false
  }

  public get logIn(): boolean {
    return (localStorage.getItem('token') != null);
  }

}
