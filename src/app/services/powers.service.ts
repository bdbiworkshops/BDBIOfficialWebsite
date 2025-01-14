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
      buttonText: 'Apply Now',
      buttonLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe_Liu4tMDcHAZLCHPSD7BtOwqcIcQuWXcYgEOetuclnw0KMg/viewform'
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
      buttonText: 'Checkout our Github',
      buttonLink: 'https://github.com/gt-big-data'
    },
  ];

  getPowers(): Power[] {
    return this.powers;
  }
}