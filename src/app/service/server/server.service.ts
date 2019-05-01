import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) {
  }

  public getAllServer() {
    return this.http.get<String[]>(environment.apiUrl.concat('server'));
  }

  public addServerApi(value: any) {
    return this.http.post(environment.apiUrl.concat('server'), value);
  }

  public removeServer(servers: String[]) {
    return this.http.post(environment.apiUrl.concat('server/delete'), servers);
  }
}
