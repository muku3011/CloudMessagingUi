import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Server } from 'src/app/schema/server';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private readonly apiUrl: string;

  constructor(private http: HttpClient) {
    console.log('Is production environment : ' + environment.production);
    this.apiUrl = window.location.origin + "/"
    console.log('Origin : ' + this.apiUrl);
  }

  public getAllServer() {
    return this.http.get<Server[]>(this.apiUrl.concat('server'));
  }

  public addServerApi(value: Server): Observable<Server> {
    return this.http.post<Server>(this.apiUrl.concat('server'), value);
  }

  public removeServer(servers: Server[]) {
    const deleteBody: Array<String> = [];

    servers.forEach(server => {
      deleteBody.push(server.serverUrl);
    });

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: deleteBody
    };

    return this.http.delete(this.apiUrl.concat('server'), options);
  }
}
