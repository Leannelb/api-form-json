
import { HttpClientService } from './http-client.service';
import { Constants } from './../constants';
import { Injectable } from '@angular/core';
import { UserModel }
import { GenericResponse } from './user.service';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	private URL = Constants.USERS_URL;
	users: any;


	constructor(private httpClient: HttpClientService) { }

	public getUsers() {
		this.users = this.httpClient.get<USers>(this.URL)
		return 
	}
}
