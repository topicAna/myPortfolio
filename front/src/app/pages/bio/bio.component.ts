import { Component, OnInit } from '@angular/core';
import { BioService } from 'src/app/services/bio.service';
import { Bio } from 'src/app/models/bio.model';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {

  bio: Bio[] = [];
  intro = '';
  constructor(private bioService: BioService) { }

  ngOnInit(): void {
    this.getBio();
  }


  getBio() {
    this.bioService.getBio().subscribe(data =>
      this.intro = (data[0].intro));
  }

  downloadCV() {
    console.log('download cv');
  }
}
