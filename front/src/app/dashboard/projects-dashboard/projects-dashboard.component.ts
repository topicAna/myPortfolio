import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ProjectsService } from 'src/app/services/projects.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Project } from 'src/app/models/project.model';
import { dashboardMenuItems } from '../admin-dashboard/dashboard-menu-items';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { ToolboxService } from 'src/app/services/toolbox.service';
import { ToolboxItem } from 'src/app/models/toolboxItem';


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

  constructor(private projectsService: ProjectsService, private http: HttpClient, private toolboxService: ToolboxService) { }

  @ViewChildren ('checkBox') checkBox: QueryList<any>;

  projects: Project[] = [];
  toolboxItems: ToolboxItem[] = [];
  newProject: Project = new Project();
  lastProjectId: number;
  columnsToDisplay = ['id', 'name', 'edit/delete'];
  projectToEdit: Project;
  idProjectToEdit: number;
  expandedElement: Project | null;
  dashboardMenuItems = dashboardMenuItems;
  projectDetailsTable: Project[] = [];
  dataSource = new MatTableDataSource(this.projects);
  project: any;
  checked = [];

  formGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    youtube_link: new FormControl('', Validators.required),
    github_link: new FormControl('', Validators.required),
    toolbox: new FormArray([
      new FormGroup({
        id: new FormControl(),
        name: new FormControl(),
        master_level: new FormControl(),
        sortcut: new FormControl(),
      }),
    ])
  });

  ngOnInit(): void {
    this.getAllProjectsWithToolbox();
    this.getAllToolboxItems();
  }

  get toolbox(): FormArray {
    return this.formGroup.get('toolbox') as FormArray;
  }

  public getAllProjectsWithToolbox() {
    for (let i = 1; i < 8; i++) {
      const $project = this.http.get(`http://localhost:3000/projects/${i}`);
      const $toolbox = this.http.get(`http://localhost:3000/toolbox/${i}`);
      forkJoin([$project, $toolbox]).subscribe(results => {
        this.project = results[0];
        this.project.toolbox = Object.entries(results[1]).map(e => e[1]);
        this.projects.push(this.project);
        this.dataSource.data = this.projects;
        console.log('datasource', this.dataSource.data);
      }
      );
    }
  }

  getAllToolboxItems() {
    this.toolboxService.getToolboxItems().subscribe(items => {
      this.toolboxItems = items;
    });
  }

  getCheckbox($event, object) {
    console.log(object, $event.defaultChecked);
  }

    createProject() {
      this.newProject.name = this.formGroup.value.name;
      this.newProject.description = this.formGroup.value.description;
      this.newProject.youtube_link = this.formGroup.value.youtube_link;
      this.newProject.github_link = this.formGroup.value.github_link;
      this.projectsService.postProject(this.newProject).subscribe(
        (error) => {
          console.error(error);
          this.getAllProjectsWithToolbox();
        }
      );
    }


    deleteProject(project) {
      this.projectsService.deleteProject(project.id).subscribe(
        (error) => {
          console.error(error);
          this.getAllProjectsWithToolbox();
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
      this.projectsService.putProject(this.projectToEdit, this.idProjectToEdit).subscribe(result => { this.getAllProjectsWithToolbox(); });
    }

    // toolbox items logic

    removeToolboxItem(projectToEditId: number, toolboxItemName: string) {
      this.toolboxService.getToolboxItemByProjectId(projectToEditId).subscribe(
        data => console.log(data)
      );
      console.log(' click on delete with id', projectToEditId, toolboxItemName);
    }


  }
