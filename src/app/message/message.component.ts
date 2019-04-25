import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {HttpHandlerService} from '../http-handler.service';
import {Message} from '../message';
import {RxFormBuilder} from '@rxweb/reactive-form-validators';
import {StorageService} from "../storage.service";
import {ServerDetails, User} from "../user";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  sendMessageTitle = 'Send message';

  // For testing JSON requests
  bodyMessage: String = String();

  sendMessageForm = new FormGroup({
    token: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl('')
  });
  availableUsers: User[];
  availableServers: ServerDetails[];

  constructor(private httpHandlerService: HttpHandlerService, private sendMessageFormBuilder: RxFormBuilder, private storageService: StorageService) {
  }

  ngOnInit() {
    let messageRequest: Message = {
      notification: {
        title: '',
        body: ''
      },
      to: '',
      server: ''
    };

    this.sendMessageForm = this.sendMessageFormBuilder.group(messageRequest);
    this.availableUsers = this.storageService.userList;
    this.availableServers = this.storageService.serverApiList;
  }

  sendMessage() {
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
      '    "hello": "This is a Firebase Cloud Messaging Device Gr new v Message!"\n' +
      '  },\n' +
      '  "to": ""\n' +
      '}';

    const serverDetail: ServerDetails = this.storageService.getServerApiKey(this.sendMessageForm.get('server').value);

    this.sendMessageForm.get('server').disable();

    //console.log('Request in JSON format : ' + JSON.stringify(this.sendMessageForm.value));

    // this.httpHandlerService.sendMessage(this.bodyMessage);
    this.httpHandlerService.sendMessage(this.sendMessageForm.value, serverDetail.serverApiKey, serverDetail.serverApiUrl);

    this.sendMessageForm.get('server').enable();
  }
}
