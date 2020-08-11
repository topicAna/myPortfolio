import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { error } from 'protractor';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData = new FormGroup({
    identifiant: new FormControl(),
    password: new FormControl(),
    intro: new FormControl(),
    email: new FormControl(),
    phone: new FormControl()
  });

  constructor(private registrationService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser() {
    const user = this.registerUserData.value;
    this.registrationService.registerUser(user).subscribe(
      result => {
      this.router.navigateByUrl('/dashboard/home');
    },
    err => {
        Swal.fire(err.error);
    });
  }
}
