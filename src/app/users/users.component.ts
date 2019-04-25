import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RxFormBuilder} from "@rxweb/reactive-form-validators";
import {User} from "../user";
import {StorageService} from "../storage.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  addUserTitle = 'Add user';

  addUserForm = new FormGroup({
    userName: new FormControl(''),
    token: new FormControl('')
  });

  constructor(private formBuilder: RxFormBuilder, private storageService: StorageService) {
  }

  ngOnInit() {

    const addUser: User = {
      userName: '',
      token: ''
    };
    this.addUserForm = this.formBuilder.group(addUser);
  }

  addUser() {
    //console.log('Request in JSON format : ' + JSON.stringify(this.addUserForm.value));
    //this.storageService.getUserList(). userList.push(this.addServerDetailsForm.value)
    this.storageService.addUser(this.addUserForm.value);
  }
}
