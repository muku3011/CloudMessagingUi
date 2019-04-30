import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../service/user/user.service';
import {SelectionModel} from '@angular/cdk/collections';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  displayedColumns: string[] = ['select', 'userName'];

  userDataSource: String[];
  selection = new SelectionModel<String>(true, []);

  constructor(private userService: UserService, private toaster: ToastrService) {
  }

  ngOnInit() {
    this.getAllUser();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.userDataSource.length;
    return numSelected === numRows;
  }

  removeSelectedRows() {
    console.log(this.selection.selected);
    this.removeUser(this.selection.selected);
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.userDataSource.forEach(row => this.selection.select(row));
  }

  public getAllUser() {
    this.userService.getAllUser().subscribe(value => this.userDataSource = value);
  }

  public removeUser(users: String[]) {
    this.userService.removeUser(users).subscribe(data => {
      this.toaster.success('Server(s) removed successfully', 'Success');
      console.log(data);
    }, error => {
      this.toaster.error('Server(s) not removed', 'Error');
      console.log(error);
    });
    this.getAllUser();
  }
}
