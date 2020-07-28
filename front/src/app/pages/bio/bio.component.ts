import { Component, OnInit } from '@angular/core';
import { BioService } from 'src/app/services/bio.service';
import { Bio } from 'src/app/models/bio.model';
import { EducationService } from 'src/app/services/education.service';
import { Education } from 'src/app/models/education';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {

  bio: Bio[] = [];
  education: Education[] = [];
  intro = '';
  constructor(private bioService: BioService, private educationService: EducationService) { }

  ngOnInit(): void {
    this.getBio();
    this.getEducation();
  }


  getBio() {
    this.bioService.getBio().subscribe(data =>
      this.intro = (data[0].intro));
  }

  getEducation() {
    this.educationService.getEducations().subscribe(data => {
      console.log(data);
      this.education = data;
    });
  }

  downloadCV() {
    console.log('download cv');
  }
}
