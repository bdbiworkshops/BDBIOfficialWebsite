import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { FaqCardComponent } from '../../components/faq-card/faq-card.component';
import { FAQ, FaqService } from '../../services/faqs.service';
import {MatDividerModule} from '@angular/material/divider';
@Component({
  selector: 'app-faq-container',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatDividerModule, FaqCardComponent],
  templateUrl: './faq-container.component.html',
  styles: [`
    .dark-divider {
      border-top-color: rgba(0, 0, 0, 0.3);
    }
  `]
})
export class FaqContainerComponent implements OnInit {
  faqs: FAQ[] = [];

  constructor(private faqService: FaqService) {}

  ngOnInit() {
    this.faqs = this.faqService.getFaqs();
    console.log('FAQs loaded:', this.faqs); // Add this line for debugging
  }
}