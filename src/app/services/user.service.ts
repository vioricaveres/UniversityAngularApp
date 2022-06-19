import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../constants';
import { UserItem } from 'src/app/models/user-items';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
      return this.httpClient.get<UserItem[]>(API_URL + 'User');
  }
  addUserItem(userItem : UserItem) {
      return this.httpClient.post<UserItem>(API_URL + 'User', userItem);
  }
  deleteUserItem(id: number) {
    return this.httpClient.delete<number>(
    API_URL + 'User/' + id);
    }
  updateUserItem(userItem : UserItem) {
    return this.httpClient.put<UserItem>(API_URL + 'User/' + userItem.id, userItem);
  }
}
