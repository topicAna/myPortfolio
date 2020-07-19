import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  private baseUrl = 'https://api.github.com/users/lattara';

  constructor(private http: HttpClient, private router: Router) { }

  getEvents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/events`);
  }

  getProfile() {
    return this.http.get(`${this.baseUrl}`);
  }
}
