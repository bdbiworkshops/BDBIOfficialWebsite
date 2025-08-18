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
      answer: "Come to our Fall Kickoff on Wednesday, August 28th at 6:30 PM in Weber Classroom 1 and apply to be placed on a project team! Applications are due Saturday, September 6th, 2025 at 11:59 PM."
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
