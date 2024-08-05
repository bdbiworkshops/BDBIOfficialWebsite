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
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSdEEacQ38d8t4PHrX3QNCW4FYoh2TBWvl16IWjdOlbL0yU04Q/viewform?usp=sf_link'
    },
   
    {
      imageUrl: '../../assets/flightdelay.png',
      title: 'Flight Delay Detector',
      description: 'Giving flyers more information about delays upon booking a ticket, saving time, stress, and energy.',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSdEEacQ38d8t4PHrX3QNCW4FYoh2TBWvl16IWjdOlbL0yU04Q/viewform?usp=sf_link'
    },
    {
      imageUrl: '../../assets/vremotion.png',
      title: 'VR State Analysis',
      description: 'Research into motion data extracted from VR devices to predict heart rate, disease risk, stress, and emotions.',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSdEEacQ38d8t4PHrX3QNCW4FYoh2TBWvl16IWjdOlbL0yU04Q/viewform?usp=sf_link'
    },
    {
      imageUrl: '../../assets/memorai.jpg',
      title: 'MemoirAI',
      description: 'Intelligent memory companion that intuitively stores, tags, and retrieves images, notes, and videos on cloud',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSdEEacQ38d8t4PHrX3QNCW4FYoh2TBWvl16IWjdOlbL0yU04Q/viewform?usp=sf_link'
    },    
    {
      imageUrl: '../../assets/icarebot.jpg',
      title: 'iCareBot',
      description: 'Develop a conversational AI interface powered by a domain-specific language model (LLM) trained on healthcare data to enable users to intuitively interact with their health data.',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSdEEacQ38d8t4PHrX3QNCW4FYoh2TBWvl16IWjdOlbL0yU04Q/viewform?usp=sf_link'
    },
    {
      imageUrl: '../../assets/agriculture.jpg',
      title: 'Agricultural Productivity',
      description: 'Cropland type and yield predictions (with computer vision & temporal models) to support farmers and UN Zero Hunger',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSdEEacQ38d8t4PHrX3QNCW4FYoh2TBWvl16IWjdOlbL0yU04Q/viewform?usp=sf_link'
    },
    {
      imageUrl: '../../assets/cardiac.jpg',
      title: 'Arrythmia Detection',
      description: 'AI to help detect heart arrythmia using deep learning and machine learning techniques on heart beat audio and EKGs',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSdEEacQ38d8t4PHrX3QNCW4FYoh2TBWvl16IWjdOlbL0yU04Q/viewform?usp=sf_link'
    },
    {
      imageUrl: '../../assets/smartpath.png',
      title: 'SmartPathAI',
      description: 'Transform your mistakes into mastery with AI-powered personalized learning paths.',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSdEEacQ38d8t4PHrX3QNCW4FYoh2TBWvl16IWjdOlbL0yU04Q/viewform?usp=sf_link'
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}