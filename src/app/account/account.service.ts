import { Injectable, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Credential } from './types/credential.type';
import { API_BASE_URL } from '../../environments/environment';

@Injectable()

export class AccountService implements OnInit{

	private headers: Headers = new Headers();

	constructor(public http : Http) {}
	
	ngOnInit(){
		this.headers.set('Accept', 'application/json');
		this.headers.set('Content-Type', 'application/json');
	}

	login(account : Credential){
		// let options = new RequestOptions({ headers: this.headers });
		this.headers.set('Authorization', 'Basic '+account.token);
		// let response;
		return this.http.get(API_BASE_URL+'authorizations', {headers : this.headers})
				// .subscribe(
				// 	data => {
				// 		response = data.json();
				// 	},
				// 	err => {
				// 		response = err.json();
				// 	},
				// 	() => {
				// 		console.log("end");
				// 	}
				// );
		// return response;
	}
}


