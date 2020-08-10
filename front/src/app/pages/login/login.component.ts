import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = new FormGroup({
    identifiant: new FormControl(),
    password: new FormControl(),
    intro: new FormControl(),
    email: new FormControl(),
    phone: new FormControl()
  });

  constructor(private registrationService: RegisterService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    console.log('login user');
  }

}
