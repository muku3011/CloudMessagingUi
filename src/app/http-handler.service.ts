import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpHandlerService {

  private apiURL = 'https://fcm.googleapis.com/fcm/send';
  private apiServerKey = '';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'key=' + this.apiServerKey
    })
  };

  constructor(private http: HttpClient) {
  }

  public sendMessage(sendRequest: Object) {

    this.http.post(this.apiURL, sendRequest, this.httpOptions).subscribe(data => {
      // Post doesn't fire if it doesn't get subscribed to
      console.log(data);
    });
  }
}
