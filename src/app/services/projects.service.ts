import { Injectable } from '@angular/core';

export interface Project {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    {
      imageUrl: '../../assets/protein.jpeg',
      title: 'Protein Synthesis',
      description: 'Exploring generative-AI approaches to synthesizing novel biomolecules and proteins.',
      link: 'https://example.com/project1'
    },
   
    {
      imageUrl: '../../assets/flightdelay.png',
      title: 'Flight Delay Detector',
      description: 'Giving flyers more information about delays upon booking a ticket, saving time, stress, and energy.',
      link: 'https://example.com/project1'
    },
    {
      imageUrl: '../../assets/smartpath.png',
      title: 'SmartPathAI',
      description: 'Transform your mistakes into mastery with AI-powered personalized learning paths.',
      link: 'https://example.com/project2'
    },
    {
      imageUrl: '../../assets/vremotion.png',
      title: 'VR State Analysish',
      description: 'Research into motion data extracted from VR devices to predict heart rate, disease risk, stress, and emotions',
      link: 'https://example.com/project2'
    },
    {
      imageUrl: '../../assets/icarebot.png',
      title: 'iCareBot',
      description: 'Develop a conversational AI interface powered by a domain-specific language model (LLM) trained on healthcare data to enable users to intuitively interact with their health data.',
      link: 'https://example.com/project2'
    },
    {
      imageUrl: '../../assets/memorai.jpg',
      title: 'MemoirAI',
      description: 'AI-powered intelligent memory companion that intuitively stores, tags, and retrieves images, notes, and videos on cloud',
      link: 'https://example.com/project2'
    },
    {
      imageUrl: '../../assets/agriculture.jpg',
      title: 'Agricultural Productivity Forecast',
      description: 'Crop type & yield predictions for UN Zero Hunger',
      link: 'https://example.com/project2'
    },
    {
      imageUrl: '../../assets/cardiac.jpg',
      title: 'Arrythmia Detection',
      description: 'ML model to help detect heart arrythmia',
      link: 'https://example.com/project2'
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}