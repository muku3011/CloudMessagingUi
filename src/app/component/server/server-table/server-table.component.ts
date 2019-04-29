import {Component, OnInit} from '@angular/core';
import {ServerService} from "../../../service/server/server.service";

@Component({
  selector: 'app-server-api-table',
  templateUrl: './server-table.component.html',
  styleUrls: ['./server-table.component.scss']
})
export class ServerTableComponent implements OnInit {

  displayedColumns: string[] = ['serverUrl'];

  serverDataSource: String[];

  constructor(private serverService: ServerService) {
  }

  ngOnInit() {
    this.serverService.getServer().subscribe(value => this.serverDataSource = value);
  }

}
