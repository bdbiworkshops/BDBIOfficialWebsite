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
      imageUrl: 'assets/flightdelay.png',
      title: 'Flight Delay Detector',
      description: 'Giving flyers more information about delays upon searching for tickets, saving time, stress, and energy.',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSe_Liu4tMDcHAZLCHPSD7BtOwqcIcQuWXcYgEOetuclnw0KMg/viewform'
    },
    {
      imageUrl: 'assets/vremotion.png',
      title: 'VR State Analysis',
      description: 'Predict stress, emotions, and disease risk from already-available VR headset motion sensor data in real-time.',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSe_Liu4tMDcHAZLCHPSD7BtOwqcIcQuWXcYgEOetuclnw0KMg/viewform'
    },   
    {
      imageUrl: 'assets/agriculture.jpg',
      title: 'Agricultural Productivity',
      description: 'Cropland type and yield predictions (with computer vision & temporal models) to support farmers and UN Zero Hunger.',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSe_Liu4tMDcHAZLCHPSD7BtOwqcIcQuWXcYgEOetuclnw0KMg/viewform'
    },
    
    {
      imageUrl: 'assets/simpli.png',
      title: 'SimpliEarn',
      description: 'Making financial earnings calls easy and understandable to novice investors through an interactive dashboard.',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSe_Liu4tMDcHAZLCHPSD7BtOwqcIcQuWXcYgEOetuclnw0KMg/viewform'
    },
    
    {
      imageUrl: 'assets/stinger.png',
      title: 'Stinger Delay',
      description: 'Using AI to improve the quality of public transportation at Georgia Tech by providing delay predictions for the Stinger buses.',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSe_Liu4tMDcHAZLCHPSD7BtOwqcIcQuWXcYgEOetuclnw0KMg/viewform'
    },
    {
      imageUrl: 'assets/protein.jpeg',
      title: 'Protein Synthesis',
      description: 'Exploring generative-AI approaches to synthesizing novel biomolecules and proteins.',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSe_Liu4tMDcHAZLCHPSD7BtOwqcIcQuWXcYgEOetuclnw0KMg/viewform'
    },
    {
      imageUrl: 'assets/datagen.png',
      title: 'DataGen',
      description: 'Generating custom datasets by learning from user feedback to help engineers and researchers acquire large amounts of data from the web.',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSe_Liu4tMDcHAZLCHPSD7BtOwqcIcQuWXcYgEOetuclnw0KMg/viewform'
    },
    {
      imageUrl: 'assets/smartpath.png',
      title: 'SmartPathAI',
      description: 'Transform your mistakes into mastery with AI-powered personalized learning paths.',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSe_Liu4tMDcHAZLCHPSD7BtOwqcIcQuWXcYgEOetuclnw0KMg/viewform'
    },
    
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}