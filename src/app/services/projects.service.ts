import { Injectable } from '@angular/core';

export interface Project {
  imageUrl: string;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    
   
    {
      imageUrl: 'assets/perfectPunch.png',
      title: 'Perfect Punch',
      description: 'Revolutionizing boxing training with AI-powered, hardware-free analytics for enhanced performance and safety',
    },
    {
      imageUrl: 'assets/vremotion.png',
      title: 'VR State Analysis',
      description: 'Predict stress, emotions, and disease risk from already-available VR headset motion sensor data in real-time.',
    },   
    {
      imageUrl: 'assets/aquatic.jpeg',
      title: 'Aquatic Sustainability',
      description: 'Analyzing watershed anomalies and water affordability patterns to protect at-risk communities and support UN Clean Water goals.',
    },
    
    {
      imageUrl: 'assets/simpli.png',
      title: 'SimpliEarn',
      description: 'Making financial earnings calls easy and understandable to novice investors through an interactive dashboard.',
    },
    
    {
      imageUrl: 'assets/stinger.png',
      title: 'Stinger Delay',
      description: 'Using AI to improve the quality of public transportation at Georgia Tech by providing delay predictions for the Stinger buses.',
    },
    {
      imageUrl: 'assets/terratrends.png',
      title: 'TerraTrends',
      description: 'Using AI/ML to forecast economic and regional trends, to empower small and medium business owners expand strategically.',
    },
    {
      imageUrl: 'assets/datagen.png',
      title: 'DataGen',
      description: 'Generating custom datasets by learning from user feedback to help engineers and researchers acquire large amounts of data from the web.',
    },
    {
      imageUrl: 'assets/smartpath.png',
      title: 'SmartPathAI',
      description: 'Transform your mistakes into mastery with AI-powered personalized learning paths.',
    },
    {
      imageUrl: 'assets/fishcast.png',
      title: 'FishCast',
      description: 'Predicting marine population movement using climate time series modeling and machine learning.',
    },
    
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}