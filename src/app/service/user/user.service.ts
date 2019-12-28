import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { User } from 'src/app/schema/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
    console.log('Is production environment : ' + environment.production);
  }

  public getAllUser() {
    return this.http.get<User[]>(environment.apiUrl.concat('user'));
  }

  public addUser(user: any) {
    return this.http.post(environment.apiUrl.concat('user'), user);
  }

  removeUser(users: User[]) {
    const deleteBody: Array<String> = [];

    users.forEach(user => {
      deleteBody.push(user.userName);
    });

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: deleteBody
    };
    return this.http.delete(environment.apiUrl.concat('user'), options);
  }
}
