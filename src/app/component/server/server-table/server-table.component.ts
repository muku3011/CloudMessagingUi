import {Component, OnInit} from '@angular/core';
import {ServerService} from '../../../service/server/server.service';
import {SelectionModel} from '@angular/cdk/collections';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-server-api-table',
  templateUrl: './server-table.component.html',
  styleUrls: ['./server-table.component.scss']
})
export class ServerTableComponent implements OnInit {

  displayedColumns: string[] = ['select', 'serverUrl'];

  serverDataSource: String[];
  selection = new SelectionModel<String>(true, []);

  constructor(private serverService: ServerService, private toaster: ToastrService) {
  }

  ngOnInit() {
    this.getAllServer();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.serverDataSource.length;
    return numSelected === numRows;
  }

  removeSelectedRows() {
    console.log(this.selection.selected);
    this.removeServer(this.selection.selected);
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.serverDataSource.forEach(row => this.selection.select(row));
  }

  public getAllServer() {
    this.serverService.getAllServer().subscribe(value => this.serverDataSource = value);
  }

  public removeServer(servers: String[]) {
    this.serverService.removeServer(servers).subscribe(data => {
      this.toaster.success('Server(s) removed successfully', 'Success');
      console.log(data);
    }, error => {
      this.toaster.error('Server(s) not removed', 'Error');
      console.log(error);
    });
    this.getAllServer();
  }
}
