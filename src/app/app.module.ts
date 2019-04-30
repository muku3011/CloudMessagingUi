import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RxReactiveFormsModule} from '@rxweb/reactive-form-validators';
import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material';
import {DemoMaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavComponent} from './component/nav/nav.component';
import {MessageComponent} from './component/message/message.component';
import {UsersComponent} from './component/user/users.component';
import {ServerComponent} from './component/server/server.component';
import {UserTableComponent} from './component/user/user-table/user-table.component';
import {ServerTableComponent} from './component/server/server-table/server-table.component';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UsersComponent,
    MessageComponent,
    ServerComponent,
    UserTableComponent,
    ServerTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    MatNativeDateModule,
    DemoMaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
