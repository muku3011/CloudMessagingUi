import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RxFormBuilder} from "@rxweb/reactive-form-validators";
import {StorageService} from "../storage.service";
import {ServerDetails} from "../user";

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
})
export class ConfigurationComponent implements OnInit{

  addServerKeyTitle = 'Add server key';

  addServerDetailsForm = new FormGroup({
    serverApiKey: new FormControl(''),
    serverApiUrl: new FormControl('')
  });

  constructor(private formBuilder: RxFormBuilder, private storageService: StorageService) {
  }

  ngOnInit() {

    const addServerDetails: ServerDetails = {
      serverApiKey: '',
      serverApiUrl: ''
    };
    this.addServerDetailsForm = this.formBuilder.group(addServerDetails);
  }

  addServer() {
    //console.log('Request in JSON format : ' + JSON.stringify(this.addServerDetailsForm.value));
    //this.storageService.getUserList(). userList.push(this.addServerDetailsForm.value)
    this.storageService.addServerApi(this.addServerDetailsForm.value);
  }
}
