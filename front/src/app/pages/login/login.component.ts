import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = new FormGroup({
    identifiant: new FormControl(),
    password: new FormControl(),
  });

  constructor(private loginService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    const user = this.loginUserData.value;
    console.log(user)
    this.loginService.login(user).subscribe(
      result => console.log(result)
    );
  }
}
