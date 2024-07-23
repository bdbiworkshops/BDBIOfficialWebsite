import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { FAQ } from '../../services/faqs.service';

@Component({
  selector: 'app-faq-card',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './faq-card.component.html',
})
export class FaqCardComponent {
  @Input() faq!: FAQ;

  ngOnInit() {
    console.log('FAQ received:', this.faq); // Add this line for debugging
  }
}