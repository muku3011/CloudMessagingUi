import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user/user.service';
import { SelectionModel } from '@angular/cdk/collections';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/schema/user';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  displayedColumns: string[] = ['select', 'userName'];

  userDataSource = new MatTableDataSource<User>();
  selection = new SelectionModel<User>(true, []);

  constructor(private userService: UserService, private toaster: ToastrService) {
  }

  ngOnInit() {
    this.getAllUser();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.userDataSource.data.length;
    return numSelected === numRows;
  }

  removeSelectedRows() {
    // console.log(this.selection.selected);
    this.removeUser(this.selection.selected);
    this.selection.clear();
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.userDataSource.data.forEach(row => this.selection.select(row));
  }

  public getAllUser() {
    this.userService.getAllUser().subscribe(value => this.userDataSource.data = value);
  }

  public removeUser(users: User[]) {
    this.userService.removeUser(users).subscribe(data => {
      this.toaster.success('User(s) removed successfully', 'Success');
      this.getAllUser();
      // console.log(data);
    }, error => {
      this.toaster.error('User(s) not removed', 'Error');
      // console.log(error);
    });
  }
}
