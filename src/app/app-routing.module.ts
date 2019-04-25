import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageComponent } from './message/message.component';
import { UsersComponent } from './users/users.component';
import { ConfigurationComponent } from './configuration/configuration.component';

const routes: Routes = [
  { path: '', component: MessageComponent },
  { path: 'management', component: UsersComponent },
  { path: 'configuration', component: ConfigurationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
