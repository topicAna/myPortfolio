import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, merge, concat, combineLatest, of, from } from 'rxjs';

import { Project } from '../models/project.model';
import { Router } from '@angular/router';
import { ToolboxItem } from '../models/toolboxItem';
import { ToolboxService } from './toolbox.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router, private toolboxService: ToolboxService) {
  }

  getlastId(): Observable<any> {
    return from(this.http.get('http://localhost:3000/projects/lastId'));
  }

  getProjects(): Observable<any> {
    return this.http.get(`${this.baseUrl}/projects`);
  }

  putProject(project: Project, id: number): Observable < any > {
    const putProjectsURL = `${this.baseUrl}/projects/${id}`;
    return this.http.put(putProjectsURL, project);
  }

  postProject(project: Project): Observable < any > {
    return this.http.post(`${this.baseUrl}/projects`, project);
  }

  getProjectsAndToolbox(id: number): Observable<any[]> {
    // tslint:disable-next-line: deprecation
    return forkJoin(
      this.getProjectById(id),
      this.toolboxService.getToolboxItemByProjectId(id),
    );
  }

  

  deleteProject(id: number): Observable < any > {
    const url = `${this.baseUrl}/projects/${id}`;
    return this.http.delete(url);
  }

  getProjectById(id: number): Observable < any > {
    return this.http.get(`${this.baseUrl}/projects/${id}`);
  };

}
