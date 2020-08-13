import { Injectable } from '@angular/core';
import { Message } from '../models/email.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient, private router: Router) { }

  sendMail(message: Message) {
      const url = 'http://localhost:3000/contact/send';
      const emailData = {
        firstname: message.firstname,
        lastname: message.lastname,
        contact: message.contact,
        message: message.message,

      };
      return this.http.post(url, emailData);
    }
}
