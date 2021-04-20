import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  createUser(user) {
    return this.http.post(environment.apiUrl + '/signup', user)
  }
  login(user) {
    return this.http.post(environment.apiUrl + '/login', user)
  }
  logout(user) {
    return this.http.post('', user)
  }

  isUserNameExist(value) {
    return this.http.get(`${environment.apiUrl}/isUserNameExist/?userName=${value}`)
  }

  isEmailExist(value) {
    return this.http.get(`${environment.apiUrl}/isEmailExist/?email=${value}`)
  }

  isValidId(value) {
    return this.http.get(`${environment.apiUrl}/isIdValid/?id=${value}`)
  }

}
