import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { Message } from 'src/app/models/email.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private fb: FormBuilder, private contactService: ContactService) { }

  newMessage: Message = new Message();

  formGroup = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    contact: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }


  sendMail() {
    this.newMessage.firstname = this.formGroup.value.firstname;
    this.newMessage.lastname = this.formGroup.value.lastname;
    this.newMessage.contact = this.formGroup.value.contact;
    this.newMessage.message = this.formGroup.value.message;
    console.log('new message', this.newMessage)
    this.contactService.sendMail(this.newMessage).subscribe(response => {
      console.log(response);
    })
  }

}

