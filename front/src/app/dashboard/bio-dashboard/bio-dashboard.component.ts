import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-bio-dashboard',
  templateUrl: './bio-dashboard.component.html',
  styleUrls: ['./bio-dashboard.component.scss']
})
export class BioDashboardComponent implements OnInit {

  constructor() { }

  formGroup = new FormGroup ({
    name: new FormControl ('', Validators.required),
    description: new FormControl ('', Validators.required),
    youtube_link: new FormControl ('', Validators.required),
    github_link: new FormControl ('', Validators.required),
  });

  ngOnInit(): void {
  }

  createBio() {
    console.log('bio created');
  }

  saveEditedBio() {
    console.log('bio edited');
  }

}
