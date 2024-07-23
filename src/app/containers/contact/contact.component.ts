import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'contact-container',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './contact.component.html',
})
export class ContactContainerComponent {
  sendEmail() {
    // Replace 'your-email@example.com' with your actual email address
    window.location.href = 'mailto:gragy3@gatech.edu';
  }
}