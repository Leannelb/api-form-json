import { HttpClient } from '@angular/common/http';
import { UserModel } from './../models/users';
import { HttpClientService } from './http-client.service';
import { Constants } from './../constants';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	private URL = Constants.USERS_URL;
	users: UserModel[];
	test: any;

	constructor(private httpClient: HttpClient) { }

	public getUsers() {
		this.test = this.httpClient.get<UserModel[]>(this.URL);
		return this.test;
	}

	public getUserByID(id: number) {
		return this.httpClient.get<UserModel>(this.URL+"/"+id)
	}
}
