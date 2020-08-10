import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class RegisterService {

    private baseUrl = 'http://localhost:3000/auth';

    constructor(private http: HttpClient, private router: Router) {
    }

    registerUser(user: User) {
        const putAdminURL = `${this.baseUrl}/register`;
        return this.http.post(putAdminURL, user);
    }

}
