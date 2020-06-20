import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) {
  }

  putProject(project: Project, id: number): Observable<any> {
    console.log(project);
    const putProjectsURL = `${this.baseUrl}/projects/${id}`;
    console.log(putProjectsURL);
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
