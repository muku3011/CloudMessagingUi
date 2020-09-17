import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ServerService } from '../../service/server/server.service';
import { Server } from '../../schema/server';
import { ServerTableComponent } from './server-table/server-table.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-configuration',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent implements OnInit {
  @ViewChild(ServerTableComponent, { static: false }) serverTableComponent: ServerTableComponent;

  addServerKeyTitle = 'Add server';

  addServerDetailsForm = new FormGroup({
    serverKey: new FormControl(''),
    serverUrl: new FormControl('')
  });

  constructor(private formBuilder: FormBuilder, private serverService: ServerService, private toaster: ToastrService) {
  }

  ngOnInit() {
    const addServerDetails: Server = {
      serverKey: '',
      serverUrl: ''
    };

    this.addServerDetailsForm = this.formBuilder.group(addServerDetails);
  }

  addServer() {
    this.serverService.addServerApi(this.addServerDetailsForm.value).subscribe(data => {
      this.serverTableComponent.serverDataSource.connect();
      this.serverTableComponent.getAllServer();
      this.toaster.success('Server added successfully', 'Success');
      // console.log(data);
    }, error => {
      this.toaster.error('Server not added', 'Error');
      // console.log(error);
    });
  }
}
