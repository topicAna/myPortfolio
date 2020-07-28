import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from 'src/app/models/project.model';
import { forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(
    private projectsService: ProjectsService,
    private http: HttpClient,  ) { }
    projects: Project[] = [];
    project: any;

  ngOnInit(): void {
    this.getAllProjectsWithToolbox();
}

public getAllProjectsWithToolbox() {
  for (let i = 1; i < 5; i++) {
    const $project = this.http.get(`http://localhost:3000/projects/${i}`);
    const $toolbox = this.http.get(`http://localhost:3000/toolbox/${i}`);
    forkJoin([$project, $toolbox]).subscribe(results => {
      this.project = results[0];
      this.project.toolbox = Object.entries(results[1]).map(e => e[1]);
      this.projects.push(this.project);
    }
    );
  }
}
}
