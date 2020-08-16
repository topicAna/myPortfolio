import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ControlContainer } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Bio } from 'src/app/models/bio.model';
import { BioService } from '../../services/bio.service';

@Component({
  selector: 'app-bio-dashboard',
  templateUrl: './bio-dashboard.component.html',
  styleUrls: ['./bio-dashboard.component.scss']
})
export class BioDashboardComponent implements OnInit {

  bioToModify: Bio;
  modifyBioForm = this.fb.group({
    intro: [''],
    cvLink: this.fb.control(''),
  });

  constructor(private fb: FormBuilder, private http: HttpClient, private bioService: BioService) {

  }

  ngOnInit(): void {

  }

  createBio() {
    console.log('bio created');
  }

  onFileModify(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.modifyBioForm.get('cvLink').setValue(file);
      console.log(file);
      console.log(this.modifyBioForm.get('cvLink'));
    }
  }

  submitModifyBio() {
    const formDataSubmit = new FormData();
    this.bioToModify = new Bio();
    formDataSubmit.append('cvLink', this.modifyBioForm.get('cvLink').value);
    this.http.post<any>('http://localhost:3000/bio/upload', formDataSubmit).subscribe(
      res => {

        this.bioToModify.intro = this.modifyBioForm.value.intro;
        this.bioToModify.cvLink = res.data.name;

        this.bioService.putBio(this.bioToModify, 1).subscribe(bio => {
          console.log('bio updated');
        });
      }
    );
  }



}


