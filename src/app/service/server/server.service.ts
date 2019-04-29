import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalVariable} from "../../globals";

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) {
  }

  public getServer() {
    return this.http.get<String[]>(GlobalVariable.BASE_API_URL.concat('server'));
  }

  public addServerApi(value: any) {
    return this.http.post(GlobalVariable.BASE_API_URL.concat('server'), value);
  }
}
