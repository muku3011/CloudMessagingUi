import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageComponent } from './message/message.component';
import { UsersComponent } from './users/users.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: MessageComponent },
  { path: 'users', component: UsersComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
