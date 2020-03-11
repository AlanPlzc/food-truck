import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _usersUrl = './../../assets/api/users/users.json';

  constructor(private _http: HttpClient) { }

  getUsers() {
    return this._http.get(this._usersUrl);
  }
}