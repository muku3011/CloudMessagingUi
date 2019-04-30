import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalVariable} from '../../globals';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  public getAllUser() {
    return this.http.get<String[]>(GlobalVariable.BASE_API_URL.concat('user'));
  }

  public addUser(user: any) {
    return this.http.post(GlobalVariable.BASE_API_URL.concat('user'), user);
  }

  removeUser(users: String[]) {
    return this.http.post(GlobalVariable.BASE_API_URL.concat('user/delete'), users);
  }
}
