import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { RegisterService } from 'src/app/services/registration.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

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

  constructor(private registrationService: RegisterService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser() {
    const user = this.registerUserData.value;
    this.registrationService.registerUser(user).subscribe(result => {
      this.router.navigateByUrl('/dashboard');
    }

    );
  }
}
