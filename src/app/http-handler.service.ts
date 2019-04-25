import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpHandlerService {

  constructor(private http: HttpClient,) {
  }

  public sendMessage(sendRequest: Object, apiServerKey: string, apiServerUrl: string) {
    //console.log('API key : ' + apiServerKey);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'key=' + apiServerKey
      })
    };

    //console.log('API url : ' + apiServerUrl)

    this.http.post(apiServerUrl, sendRequest, httpOptions).subscribe(data => {
      // Post doesn't fire if it doesn't get subscribed to
      console.log(data);
    });
  }
}
