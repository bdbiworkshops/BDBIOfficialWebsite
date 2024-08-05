import { Injectable } from '@angular/core';

export interface FAQ {
  question: string;
  answer: string;
}

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  private faqs: FAQ[] = [
    {
      question: "What is bdbi's focus?",
      answer: "bdbi is focused on machine learning and its applications in various fields such as data analysis, predictive modeling, and pattern recognition."
    },
    {
      question: "How can I join?",
      answer: "To become a member, simply attend one of our meetings or events and express your interest to the organizers."
    },
    {
      question: "What projects does bdbi work on?",
      answer: "We work on a variety of projects related to machine learning, including data analysis, natural language processing, and computer vision."
    },
    {
      question: "Are there any prerequisites to join?",
      answer: "There are no specific prerequisites to join bdbi. We welcome students from all backgrounds who are interested in machine learning."
    },
    {
      question: "How often does bdbi meet?",
      answer: "bdbi meets once a week for presentations, workshops, and discussions on various machine learning topics."
    }
  ];

  getFaqs(): FAQ[] {
    return this.faqs;
  }
}