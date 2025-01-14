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
      answer: "To become a member, simply attend one of our weekly events starting Thursday, January 16th, 2025 at Klaus 1456 and express your interest! Applications are due on January 19th at 11:59PM"
    },
    {
      question: "What projects does bdbi work on?",
      answer: "We work on a variety of projects related to machine learning, including data analysis, natural language processing, and computer vision."
    },
    {
      question: "Are there any prerequisites to join?",
      answer: "There are no specific prerequisites to join bdbi. We welcome students from all backgrounds who are interested in Machine Learning, Software Development, and User Experience."
    },
    {
      question: "How often does bdbi meet?",
      answer: "bdbi meets once a week for presentations, workshops, and discussions on various machine learning topics. This is seperate from project meetings, where each team meets seperately to coordinate/work on their project."
    }
  ];

  getFaqs(): FAQ[] {
    return this.faqs;
  }
}