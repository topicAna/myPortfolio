import { Component, OnInit } from '@angular/core';
import { dashboardMenuItems } from './dashboard-menu-items';
import { ProjectsService } from 'src/app/services/projects.service';
import { Project } from 'src/app/models/project.model';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class AdminDashboardComponent implements OnInit {

  dataSource = [];
  columnsToDisplay = ['id', 'name', 'delete'];
  expandedElement: Project | null;
  dashboardMenuItems = dashboardMenuItems;
  projectFormArr = [];
  projectForm: FormGroup;

  constructor(private projectsService: ProjectsService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
    this.projectsService.getProjects().subscribe(result => {
      this.dataSource = result;
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.dataSource.length; i++) {
      this.projectForm.patchValue({
        name: this.dataSource[i].name,
        description: this.dataSource[i].description,
        youtube_link: this.dataSource[i].youtube_link,
        github_link: this.dataSource[i].github_link,
      });
      this.projectFormArr.push(this.projectForm);
    }
    });
  }

  initializeForm() {
    this.projectForm = new FormGroup ({
      name: new FormControl(),
      description: new FormControl(),
      youtube_link: new FormControl(),
      github_link: new FormControl(),
    });
  }

}

// link to tutorial on how to patch value of each seperate form

// https://ultimatecourses.com/blog/angular-2-form-controls-patch-value-set-value
