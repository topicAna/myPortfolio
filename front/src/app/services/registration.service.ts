import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Admin } from '../models/admin.model';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class RegisterService {

    private baseUrl = 'http://localhost:3000/auth';

    constructor(private http: HttpClient, private router: Router) {
    }

    registerAdmin(admin: Admin) {
        const putAdminURL = `${this.baseUrl}/register`;
        return this.http.post(putAdminURL, admin);
    }

    // getBio(): Observable<any> {
    //     return from(this.http.get('http://localhost:3000/bio'));
    // }

    // putBio(bio: Bio): Observable<any> {
    //     const putProjectsURL = `${this.baseUrl}/bio`;
    //     return this.http.put(putProjectsURL, bio);
    // }

    // postBio(bio: Bio): Observable<any> {
    //     return this.http.post(`${this.baseUrl}/bio`, bio);
    // }

    // deleteBio(id: number): Observable<any> {
    //     const url = `${this.baseUrl}/bio`;
    //     return this.http.delete(url);
    // }

}
