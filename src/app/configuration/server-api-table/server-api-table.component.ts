import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../storage.service";

@Component({
  selector: 'app-server-api-table',
  templateUrl: './server-api-table.component.html',
  styleUrls: ['./server-api-table.component.scss']
})
export class ServerApiTableComponent  implements OnInit {


  displayedColumns: string[] = ['serverApiKey', 'serverApiUrl'];

  serverDataSource: any;

  constructor(private storageService: StorageService) {
  }


  ngOnInit() {
    this.serverDataSource = this.storageService.serverApiList;
  }


}
