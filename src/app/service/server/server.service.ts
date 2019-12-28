import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Server } from 'src/app/schema/server';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) {
  }

  public getAllServer() {
    return this.http.get<Server[]>(environment.apiUrl.concat('server'));
  }

  public addServerApi(value: Server): Observable<Server> {
    return this.http.post<Server>(environment.apiUrl.concat('server'), value);
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

    return this.http.delete(environment.apiUrl.concat('server'), options);
  }
}
