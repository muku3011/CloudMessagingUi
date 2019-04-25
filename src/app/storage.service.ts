import {Injectable} from '@angular/core';
import {ServerDetails, User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _userList: User[] = [];

  get userList(): User[] {
    return this._userList;
  }

  set userList(value: User[]) {
    this._userList = value;
  }

  public addUser(user: User) {
    this._userList.push(user);
  }

  constructor() {
  }

  private _serverApiList: ServerDetails[] = [];

  get serverApiList(): ServerDetails[] {
    return this._serverApiList;
  }

  set serverApiList(value: ServerDetails[]) {
    this._serverApiList = value;
  }

  public addServerApi(serverDetails: ServerDetails) {
    this._serverApiList.push(serverDetails);
  }

  public getServerApiKey(serverApiKey: string) {
    for (let serverDetail of this.serverApiList as Array<ServerDetails>) {
      if (serverDetail.serverApiKey == serverApiKey) {
        return serverDetail;
      }
    }
  }

}
