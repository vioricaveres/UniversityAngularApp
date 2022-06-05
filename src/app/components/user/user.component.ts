import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserItem } from 'src/app/models/user-items';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userItems : UserItem[] = [];
  newUserItem : UserItem = {};
  updateUserItem : UserItem = {};
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe((userItems: UserItem[]) => {
      this.userItems=userItems;
    });
  }
  addUserItem() {
    this.userService.addUserItem(this.newUserItem)
    .subscribe((userItems) =>
    this.userItems.push(userItems));
    this.newUserItem = {};
  }  
}
