import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersDataService {
  constructor(private http: HttpClient) {}
  users() {
    return this.http.get('https://gorest.co.in/public/v2/users');
  }
  saveUsers(data: any) {
    return this.http.post('https://gorest.co.in/public/v2/users', data);
  }
}
