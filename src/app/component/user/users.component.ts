import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RxFormBuilder} from "@rxweb/reactive-form-validators";
import {User} from "../../schema/user";
import {UserService} from "../../service/user/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  addUserTitle = 'Add user';

  addUserForm = new FormGroup({
    userName: new FormControl(''),
    userToken: new FormControl('')
  });

  constructor(private formBuilder: RxFormBuilder, private userService: UserService) {
  }

  ngOnInit() {
    const addUser: User = {
      userName: '',
      userToken: ''
    };

    this.addUserForm = this.formBuilder.group(addUser);
  }

  addUser() {
    this.userService.addUser(this.addUserForm.value).subscribe(data => {
      // Post doesn't fire if it doesn't get subscribed to
      console.log(data);
    });
  }
}
