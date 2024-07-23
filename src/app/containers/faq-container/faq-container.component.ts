import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { FaqCardComponent } from '../../components/faq-card/faq-card.component';
import { FAQ, FaqService } from '../../services/faqs.service';
@Component({
  selector: 'app-faq-container',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, FaqCardComponent],
  templateUrl: './faq-container.component.html',
})
export class FaqContainerComponent implements OnInit {
  faqs: FAQ[] = [];

  constructor(private faqService: FaqService) {}

  ngOnInit() {
    this.faqs = this.faqService.getFaqs();
    console.log('FAQs loaded:', this.faqs); // Add this line for debugging
  }
}