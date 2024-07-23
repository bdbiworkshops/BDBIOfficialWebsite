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
      imageUrl: 'https://imageio.forbes.com/specials-images/dam/imageserve/966248982/960x0.jpg?format=jpg&width=1440',
      title: 'Machine Learning Model',
      description: 'A cutting-edge ML model for predictive analytics.',
      link: 'https://example.com/project1'
    },
    {
      imageUrl: 'https://imageio.forbes.com/specials-images/dam/imageserve/966248982/960x0.jpg?format=jpg&width=1440',
      title: 'Big Data Visualization',
      description: 'Interactive data visualization for large datasets.',
      link: 'https://example.com/project2'
    },
    {
      imageUrl: 'https://imageio.forbes.com/specials-images/dam/imageserve/966248982/960x0.jpg?format=jpg&width=1440',
      title: 'Big Data Visualization',
      description: 'Interactive data visualization for large datasets.',
      link: 'https://example.com/project2'
    },
    {
      imageUrl: 'https://imageio.forbes.com/specials-images/dam/imageserve/966248982/960x0.jpg?format=jpg&width=1440',
      title: 'Big Data Visualization',
      description: 'Interactive data visualization for large datasets.',
      link: 'https://example.com/project2'
    },
    {
      imageUrl: 'https://imageio.forbes.com/specials-images/dam/imageserve/966248982/960x0.jpg?format=jpg&width=1440',
      title: 'Big Data Visualization',
      description: 'Interactive data visualization for large datasets.',
      link: 'https://example.com/project2'
    },
    {
      imageUrl: 'https://imageio.forbes.com/specials-images/dam/imageserve/966248982/960x0.jpg?format=jpg&width=1440',
      title: 'Big Data Visualization',
      description: 'Interactive data visualization for large datasets.',
      link: 'https://example.com/project2'
    },
    // Add more projects as needed
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}