import {Component, OnInit} from '@angular/core';
import {StorageService} from "../../storage.service";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {


  displayedColumns: string[] = ['userName', 'token'];

  userDataSource: any;

  constructor(private storageService: StorageService) {
  }


  ngOnInit() {
    this.userDataSource = this.storageService.userList;
  }


}
