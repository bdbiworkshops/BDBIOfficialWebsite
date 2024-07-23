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
      title: 'Stay ahead of the curve with cutting-edge projects',
      description: 'Join our club to gain valuable experience and skills in machine learning',
      buttonText: 'Learn More',
      buttonLink: '/learn-more'
    },
    {
      icon: 'cube',
      title: 'Collaborate with like-minded individuals on exciting projects',
      description: 'Expand your network and connect with industry professionals',
      buttonText: 'Sign Up',
      buttonLink: '/sign-up'
    },
    {
      icon: 'cube',
      title: 'Get hands-on experience with real-world machine learning applications',
      description: 'Enhance your resume and increase your job prospects',
      buttonText: 'Join Now',
      buttonLink: '/join-now'
    },
    {
      icon: 'cube',
      title: 'Get hands-on experience with real-world machine learning applications',
      description: 'Enhance your resume and increase your job prospects',
      buttonText: 'Join Now',
      buttonLink: '/join-now'
    },
    {
      icon: 'cube',
      title: 'Get hands-on experience with real-world machine learning applications',
      description: 'Enhance your resume and increase your job prospects',
      buttonText: 'Join Now',
      buttonLink: '/join-now'
    },
    {
      icon: 'cube',
      title: 'Get hands-on experience with real-world machine learning applications',
      description: 'Enhance your resume and increase your job prospects',
      buttonText: 'Join Now',
      buttonLink: '/join-now'
    }
  ];

  getPowers(): Power[] {
    return this.powers;
  }
}