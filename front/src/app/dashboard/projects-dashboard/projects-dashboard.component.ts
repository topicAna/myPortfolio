import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ProjectsService } from 'src/app/services/projects.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Project } from 'src/app/models/project.model';
import { dashboardMenuItems } from '../admin-dashboard/dashboard-menu-items';

@Component({
  selector: 'app-projects-dashboard',
  templateUrl: './projects-dashboard.component.html',
  styleUrls: ['./projects-dashboard.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProjectsDashboardComponent implements OnInit {

  constructor(private projectsService: ProjectsService, private formBuilder: FormBuilder, privateProjectsService: ProjectsService) { }

  projects: Project [] = [];
  newProject: Project = new Project();
  columnsToDisplay = ['id', 'name', 'edit/delete'];
  projectToEdit: Project;
  idProjectToEdit: number;
  expandedElement: Project | null;
  dashboardMenuItems = dashboardMenuItems;

  formGroup = new FormGroup ({
    name: new FormControl ('', Validators.required),
    description: new FormControl ('', Validators.required),
    youtube_link: new FormControl ('', Validators.required),
    github_link: new FormControl ('', Validators.required),
  });

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.projectsService.getProjects().subscribe(result => {
      this.projects = result;
    });
  }
  createProject() {
    this.newProject.name = this.formGroup.value.name;
    this.newProject.description = this.formGroup.value.description;
    this.newProject.youtube_link = this.formGroup.value.youtube_link;
    this.newProject.github_link = this.formGroup.value.github_link;
    this.projectsService.postProject(this.newProject).subscribe(
      (error) => {
      console.error(error);
      this.getProjects();
      }
    );
  }

  deleteProject(project) {
    this.projectsService.deleteProject(project.id).subscribe(
      (error) => {
        console.error(error);
        this.getProjects();
      }
    );
  }

  editProject(project: Project) {
    this.idProjectToEdit = project.id;
    this.projectToEdit = project;
    this.formGroup.patchValue(project);
    }

    saveEditedProject() {
      this.projectToEdit.name = this.formGroup.value.name;
      this.projectToEdit.description = this.formGroup.value.description;
      this.projectToEdit.youtube_link = this.formGroup.value.youtube_link;
      this.projectToEdit.github_link = this.formGroup.value.github_link;
      this.projectsService.putProject(this.projectToEdit, this.idProjectToEdit).subscribe(result => {this.getProjects(); });
    }


}
