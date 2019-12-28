import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../../schema/user';
import { UserService } from '../../service/user/user.service';
import { UserTableComponent } from './user-table/user-table.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  @ViewChild(UserTableComponent, { static: false }) userTableComponent: UserTableComponent;

  addUserTitle = 'Add user';

  addUserForm = new FormGroup({
    userName: new FormControl(''),
    userToken: new FormControl('')
  });

  constructor(private formBuilder: RxFormBuilder, private userService: UserService, private toaster: ToastrService) {
  }

  ngOnInit() {
    const addUser: User = {
      userName: '',
      userToken: ''
    };

    this.addUserForm = this.formBuilder.group(addUser);
  }

  addUser() {
    this.userService.addUser(this.addUserForm.value).subscribe(
      data => {
        this.userTableComponent.userDataSource.connect();
        this.userTableComponent.getAllUser();
        this.toaster.success('User added successfully', 'Success');
        // console.log(data);
      }, error => {
        this.toaster.error('User not added', 'Error');
        // console.log(error);
      });
  }
}
