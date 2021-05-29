import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private readonly apiUrl: string;

  constructor(private http: HttpClient) {
    console.log('Is production environment : ' + environment.production);
    this.apiUrl = window.location.origin + "/"
    console.log('Origin : ' + this.apiUrl);
  }

  public sendMessage(message: any) {
    return this.http.post(this.apiUrl.concat('message'), message);
  }
}
