import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../../service/server/server.service';
import { SelectionModel } from '@angular/cdk/collections';
import { ToastrService } from 'ngx-toastr';
import { Server } from 'src/app/schema/server';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-server-api-table',
  templateUrl: './server-table.component.html',
  styleUrls: ['./server-table.component.scss']
})
export class ServerTableComponent implements OnInit {

  displayedColumns: string[] = ['select', 'serverUrl'];

  serverDataSource = new MatTableDataSource<Server>();
  selection = new SelectionModel<Server>(true, []);

  constructor(private serverService: ServerService, private toaster: ToastrService) {
  }

  ngOnInit() {
    this.getAllServer();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.serverDataSource.data.length;
    return numSelected === numRows;
  }

  removeSelectedRows() {
    // console.log(this.selection.selected);
    this.removeServer(this.selection.selected);
    this.selection.clear();
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.serverDataSource.data.forEach(server => this.selection.select(server));
  }

  public getAllServer() {
    this.serverService.getAllServer().subscribe(value => this.serverDataSource.data = value);
  }

  public removeServer(servers: Server[]) {
    this.serverService.removeServer(servers).subscribe(data => {
      this.toaster.success('Server(s) removed successfully', 'Success');
      this.getAllServer();
      // console.log(data);
    }, error => {
      this.toaster.error('Server(s) not removed', 'Error');
      // console.log(error);
    });
  }
}
