import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { RegisterService } from 'src/app/services/registration.service';
import { Admin } from 'src/app/models/admin.model';

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

  constructor(private registrationService: RegisterService) { }

  ngOnInit(): void {
  }

  registerUser() {
    const admin = this.registerUserData.value;
    this.registrationService.registerAdmin(admin).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }
}
