import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MessageComponent} from "./component/message/message.component";
import {UsersComponent} from "./component/user/users.component";
import {ServerComponent} from "./component/server/server.component";

const routes: Routes = [
  {path: 'message', component: MessageComponent},
  {path: 'user', component: UsersComponent},
  {path: 'server', component: ServerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
