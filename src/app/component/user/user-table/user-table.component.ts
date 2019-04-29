import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../service/user/user.service";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {


  displayedColumns: string[] = ['userName'];

  userDataSource: any;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUser().subscribe(value => this.userDataSource = value);

  }


}
