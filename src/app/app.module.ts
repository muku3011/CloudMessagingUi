import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {UsersComponent} from './users/users.component';
import {UserTableComponent} from "./users/user-table/user-table.component";
import {MessageComponent} from './message/message.component';
import {ConfigurationComponent} from './configuration/configuration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RxReactiveFormsModule} from '@rxweb/reactive-form-validators'
import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from "@angular/material";
import {DemoMaterialModule} from "./material.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServerApiTableComponent} from "./configuration/server-api-table/server-api-table.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UsersComponent,
    MessageComponent,
    ConfigurationComponent,
    UserTableComponent,
    ServerApiTableComponent,
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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
