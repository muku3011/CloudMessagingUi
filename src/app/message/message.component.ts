import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {HttpHandlerService} from '../http-handler.service';
import {SendRequest} from '../send-request';
import {RxFormBuilder} from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  // For testing JSON requests
  bodyMessage: String = String();

  profileForm = new FormGroup({
    token: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl('')
  });

  constructor(private httpHandlerService: HttpHandlerService, private formBuilder: RxFormBuilder) {
  }

  ngOnInit() {
    const basicSetup: SendRequest = {
      notification: {
        title: 'Daily update',
        body: 'Your account balance is not sufficient'
      },
      to: ''
    };
    this.profileForm = this.formBuilder.group(basicSetup);
  }

  onSubmit() {
    /*
        this.sendRequest.to = '';
        this.notification.title = 'Angular title';
        this.notification.body = 'Angular message body';
        this.sendRequest.notification = this.notification;
    */

    this.bodyMessage = '{\n' +
      '  "notification": {\n' +
      '    "title": "Notification title",\n' +
      '    "body": "Notification body",\n' +
      '    "sound": "default",\n' +
      '    "click_action": "FCM_PLUGIN_ACTIVITY",\n' +
      '    "icon": "fcm_push_icon"\n' +
      '  },\n' +
      '  "data": {\n' +
      '    "hello": "This is a Firebase Cloud Messagin  hbhj g Device Gr new v Message!"\n' +
      '  },\n' +
      '  "to": ""\n' +
      '}';

    console.log('Request in JSON format : ' + JSON.stringify(this.profileForm.value));

    // this.httpHandlerService.sendMessage(this.bodyMessage);
    this.httpHandlerService.sendMessage(this.profileForm.value);

  }
}
