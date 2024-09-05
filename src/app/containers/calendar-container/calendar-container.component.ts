import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-calendar-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-container.component.html',
})
export class CalendarContainerComponent {
  calendarUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.calendarUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      "https://calendar.google.com/calendar/embed?src=gtbigdata%40gmail.com&ctz=America%2FNew_York"
    );
  }
}