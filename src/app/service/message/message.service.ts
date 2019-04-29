import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalVariable} from "../../globals";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient,) {
  }

  public sendMessage(message: any) {
    return this.http.post(GlobalVariable.BASE_API_URL.concat('message'), message);
  }
}
