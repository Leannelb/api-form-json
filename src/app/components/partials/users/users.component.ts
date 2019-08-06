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
	user:any;
	obj:any;
	myArrStr:any;

  constructor(private userService: UserService) { }

  ngOnInit() {
	  this.getUsers();
	  this.getUser(1);
  }

  getUsers(){
	  this.userService.getUsers().subscribe(users => this.users = users)
	  console.log(this.users);
	  return this.users;
  }
  public getUser (id: number) {
	this.userService.getUserByID(id).subscribe((response) => {
      this.user = response;
	  this.myArrStr = JSON.stringify(this.user);
	  console.log(JSON.parse(this.myArrStr));
    })
  }
}
