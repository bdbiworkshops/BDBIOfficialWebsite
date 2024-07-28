import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { FAQ } from '../../services/faqs.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-faq-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './faq-card.component.html',
})
export class FaqCardComponent {
  @Input() faq!: FAQ;
  expanded = false;

  toggleExpanded() {
    this.expanded = !this.expanded;
  }
}

// @Component({
//   selector: 'app-faq-card',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './faq-card.component.html',
// })
// export class FaqCardComponent {
//   @Input() faq!: FAQ;
//   expanded = false;

//   toggleExpanded() {
//     this.expanded = !this.expanded;
//   }

//   ngOnInit() {
//     console.log('FAQ received:', this.faq); // Add this line for debugging
//   }
// }