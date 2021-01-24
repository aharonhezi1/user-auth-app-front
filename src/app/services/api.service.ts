import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  createUser(user) {
    return this.http.post('', user)
  }
  login(user) {
    return this.http.patch('', user)
  }
  logout(user) {
    return this.http.patch('', user)
  }

}
