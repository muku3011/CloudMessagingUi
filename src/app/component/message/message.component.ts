import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MessageService } from '../../service/message/message.service';
import { Message } from '../../schema/message';
import { UserService } from '../../service/user/user.service';
import { ServerService } from '../../service/server/server.service';
import { ToastrService } from 'ngx-toastr';
import { Server } from 'src/app/schema/server';
import { User } from 'src/app/schema/user';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  sendMessageTitle = 'Send message';

  sendMessageForm = new FormGroup({
    userName: new FormControl(''),
    serverUrl: new FormControl(''),
    title: new FormControl(''),
    body: new FormControl('')
  });

  availableUsers: User[];
  availableServers: Server[];

  constructor(private sendMessageFormBuilder: FormBuilder, private messageService: MessageService, private userServer: UserService, private serverService: ServerService, private toaster: ToastrService) {
  }

  ngOnInit() {
    const messageRequest: Message = {
      userName: '',
      serverUrl: '',
      title: '',
      body: ''
    };
    this.serverService.getAllServer().subscribe(data => {
      this.availableServers = data;
    });
    this.userServer.getAllUser().subscribe(data => {
      this.availableUsers = data;
    });

    this.sendMessageForm = this.sendMessageFormBuilder.group(messageRequest);
  }

  sendMessage() {
    this.messageService.sendMessage(this.sendMessageForm.value).subscribe(
      data => {
        this.toaster.success('Message sent successfully', 'Success');
        // console.log(data);
      }, error => {
        this.toaster.error('Message not sent', 'Error');
        // console.log(error);
      });
  }
}
