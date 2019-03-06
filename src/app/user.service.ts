import { Injectable } from '@angular/core';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private _user: User;
  private _user$;

  // constructor() { }

  get isLoggedIn(): boolean {
    return this._user ? true : false
  }

  newUser(userName: string) {

    console.assert(!this._user, "Error: user already registered as: " + this.userName)
    this._user = new User(userName)
  }

  get userName(): string {
    return this._user ? this._user.userName : null

  }


}

