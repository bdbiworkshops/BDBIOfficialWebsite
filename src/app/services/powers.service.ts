import { Injectable } from '@angular/core';

export interface Power {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

@Injectable({
  providedIn: 'root'
})
export class PowersService {
  private powers: Power[] = [
    
    {
      icon: 'cube',
      title: 'Collaborate with like-minded individuals on exciting projects',
      description: 'Expand your network and connect with industry professionals',
      buttonText: 'Sign Up',
      buttonLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdEEacQ38d8t4PHrX3QNCW4FYoh2TBWvl16IWjdOlbL0yU04Q/viewform?usp=sf_link'
    },
    {
      icon: 'cube',
      title: 'Stay ahead of the curve with cutting-edge projects',
      description: 'Enhance your resume and increase your job prospects', 
      buttonText: 'Learn More',
      buttonLink: '/#projects'
    },
    {
      icon: 'cube',
      title: 'Get experience with real-world machine learning applications',
      description: 'Join bdbi to gain hands-on experience and skills in machine learning',
      buttonText: 'Join Now',
      buttonLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdEEacQ38d8t4PHrX3QNCW4FYoh2TBWvl16IWjdOlbL0yU04Q/viewform?usp=sf_link'
    },
  ];

  getPowers(): Power[] {
    return this.powers;
  }
}