import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AccountService } from '../../account/account.service';
import { Credential } from '../../account/types/credential.type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credential: Credential = new Credential();

  constructor(private  fb : FormBuilder,
              private router : Router,
              private accountService : AccountService) { }

	public loginForm = this.fb.group({
		userName : ["", Validators.required],
		password : ["", Validators.required]
	})

  ngOnInit() {
  }

  doLogin(event){
    this.credential.userName = this.loginForm.value.userName;
    this.credential.password = this.loginForm.value.password;
    this.credential.token = btoa(this.loginForm.value.userName+":"+this.loginForm.value.password);

    this.accountService.login(this.credential)
    .subscribe(
      data => {
        console.log(data.json());
        localStorage.setItem("credentials" , JSON.stringify(this.credential));
        this.router.navigate(['/home']);
      },
      err => {
        console.log(err.json());
      },
      () => {
        console.log("end");
      }
    );
  }

}
