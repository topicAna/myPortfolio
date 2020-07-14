import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private projectsService: ProjectsService ) { }
  projects: Project[] = [];

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe(response => {
      this.projects = response;
    });
}
}
