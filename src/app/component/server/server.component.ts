import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RxFormBuilder} from '@rxweb/reactive-form-validators';
import {ServerService} from '../../service/server/server.service';
import {Server} from '../../schema/server';
import {ServerTableComponent} from './server-table/server-table.component';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-configuration',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent implements OnInit {
  @ViewChild(ServerTableComponent) serverTableComponent: ServerTableComponent;

  addServerKeyTitle = 'Add server';

  addServerDetailsForm = new FormGroup({
    serverKey: new FormControl(''),
    serverUrl: new FormControl('')
  });

  constructor(private formBuilder: RxFormBuilder, private serverService: ServerService, private toaster: ToastrService) {
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
      this.toaster.success('Server added successfully', 'Success');
      console.log(data);
    }, error => {
      this.toaster.error('Server not added', 'Error');
      console.log(error);
    });
    this.serverTableComponent.getAllServer();
  }
}
