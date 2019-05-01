import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  public getAllUser() {
    console.log('Is production environment : ' + environment.production);
    return this.http.get<String[]>(environment.apiUrl.concat('user'));
  }

  public addUser(user: any) {
    return this.http.post(environment.apiUrl.concat('user'), user);
  }

  removeUser(users: String[]) {
    return this.http.post(environment.apiUrl.concat('user/delete'), users);
  }
}
