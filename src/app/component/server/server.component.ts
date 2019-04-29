import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RxFormBuilder} from "@rxweb/reactive-form-validators";
import {ServerService} from "../../service/server/server.service";
import {Server} from "../../schema/server";

@Component({
  selector: 'app-configuration',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent implements OnInit {

  addServerKeyTitle = 'Add server';

  addServerDetailsForm = new FormGroup({
    serverKey: new FormControl(''),
    serverUrl: new FormControl('')
  });


  constructor(private formBuilder: RxFormBuilder, private serverService: ServerService) {
  }

  ngOnInit() {
    let addServerDetails: Server = {
      serverKey: '',
      serverUrl: ''
    };

    this.addServerDetailsForm = this.formBuilder.group(addServerDetails);
  }

  addServer() {
    this.serverService.addServerApi(this.addServerDetailsForm.value).subscribe(data => {
      // Post doesn't fire if it doesn't get subscribed to
      console.log(data);
    });
  }
}
