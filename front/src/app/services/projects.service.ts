import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, merge, concat, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from '../models/project.model';
import { Router } from '@angular/router';
import { ToolboxItem } from '../models/toolboxItem';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private baseUrl = 'http://localhost:3000';
  private toolboxUrl = 'http://localhost:3000/toolbox/:id';


  constructor(private http: HttpClient, private router: Router) {
  }

  getAllProjectsWLenght(): Promise<any> {
    return this.http.get('http://localhost:3000/projects').toPromise();
}

  putProject(project: Project, id: number): Observable<any> {
    const putProjectsURL = `${this.baseUrl}/projects/${id}`;
    return this.http.put(putProjectsURL, project);
  }

  postProject(project: Project): Observable<any> {
    return this.http.post(`${this.baseUrl}/projects`, project);
  }

  getProjects(): Observable<any> {
    return this.http.get(`${this.baseUrl}/projects`);
  }

  deleteProject(id: number): Observable<any> {
    const url = `${this.baseUrl}/projects/${id}`;
    return this.http.delete(url);
  }

  getProjectById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/projects/${id}`);
  }

}
