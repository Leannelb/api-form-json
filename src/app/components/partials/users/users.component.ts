import { UserModel } from './../../../models/users';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

	public users:Array<UserModel>;

  constructor(private userService: UserService) { }

  ngOnInit() {
	  this.getUsers();
  }

  getUsers(){
	  this.userService.getUsers().subscribe(users => this.users = users)
	  console.log(this.users);
	  return this.users;
  }

}
