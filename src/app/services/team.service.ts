import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface TeamMember {
  name: string;
  role: string;
  schoolYear: string;
  image: string;
  linkedIn: string;
}

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teamMembers: TeamMember[] = [
    {
      name: 'Saniya Srivastava',
      role: 'President',
      schoolYear: '3rd Year',
      image: 'assets/saniya.jpeg',
      linkedIn: 'https://www.linkedin.com/in/ssrivastava22/'
    },
    {
      name: 'Gabriel Ragy',
      role: 'Vice President',
      schoolYear: '4th Year',
      image: 'assets/gabe.jpeg',
      linkedIn: 'https://www.linkedin.com/in/gabrielragy/'
    },
    {
      name: 'Ria Patel',
      role: 'Data Visualization Workshop Lead',
      schoolYear: '3rd Year',
      image: 'assets/ria.jpeg',
      linkedIn: 'https://www.linkedin.com/in/ria04patel'
    },
    {
      name: 'Quan Le',
      role: 'Platform Workshop Lead',
      schoolYear: '3rd Year',
      image: 'assets/quan.jpeg',
      linkedIn: 'https://www.linkedin.com/in/quan-le14'
    },

    {
      name: 'Raymond Zeng',
      role: 'Data Analysis Workshop Lead',
      schoolYear: '2nd Year',
      image: 'assets/raymond.jpeg',
      linkedIn: 'https://www.linkedin.com/in/raymondrzeng/'
    },
    {
      name: 'Heeba Merchant',
      role: 'Director of Marketing',
      schoolYear: '4th Year',
      image: 'assets/heeba.jpeg',
      linkedIn: 'https://www.linkedin.com/in/heebamerchant/'
    },
    {
      name: 'Edison Hong',
      role: 'Director of Events',
      schoolYear: '2nd Year',
      image: 'assets/eddy.jpeg',
      linkedIn: 'https://www.linkedin.com/in/edisonhong/'
    },
    {
      name: 'Srimaaye Jegannathan',
      role: 'Director of Sponsorship',
      schoolYear: '3rd year',
      image: 'assets/srimaaye.jpeg',
      linkedIn: 'https://www.linkedin.com/in/srimaaye-jegannathan/'
    },
    {
      name: 'Ari Nair',
      role: 'Project Lead - Flight Delay Prediction',
      schoolYear: '3rd Year',
      image: 'assets/ari.jpeg',
      linkedIn: 'https://www.linkedin.com/in/ari-nair/'
    },
    {
      name: 'Ibhan Aggarwal',
      role: 'Project Lead - Agricultural Productivity',
      schoolYear: '2nd Year',
      image: 'assets/ibhan.jpg',
      linkedIn: 'https://www.linkedin.com/in/ibhan-aggarwal/'
    },
    {
      name: 'Naman Talreja',
      role: 'Project Lead - SmartPathAI',
      schoolYear: '2nd Year',
      image: 'assets/naman.jpeg',
      linkedIn: 'https://www.linkedin.com/in/naman-talreja/'
    },
    {
      name: 'Reese Jednorozec',
      role: 'Project Lead - Protein Synthesis',
      schoolYear: '4th Year',
      image: 'assets/reese.jpeg',
      linkedIn: 'https://www.linkedin.com/in/reese-jednorozec/'
    },
    {
      name: 'Ryan Clark',
      role: 'Project Lead - VR State Analysis',
      schoolYear: '4th Year',
      image: 'assets/ryan.jpeg',
      linkedIn: 'https://www.linkedin.com/in/ryangerhardclark/'
    },
    {
      name: 'Pranav Narala',
      role: 'Project Lead - Protein Synthesis',
      schoolYear: '2nd Year',
      image: 'assets/pranav.jpeg',
      linkedIn: 'https://www.linkedin.com/in/pranavnarala'
    },
    {
      name: 'Juaijin Tony Tu',
      role: 'Project Lead - MemoirAI',
      schoolYear: '4th Year',
      image: 'assets/tony.jpeg',
      linkedIn: 'https://www.linkedin.com/in/huaijin-tu-912627224/'
    },
    {
      name: 'Pranav Somu',
      role: 'Project Lead - Agricultural Productivity',
      schoolYear: '2nd Year',
      image: 'assets/pranav2.jpg',
      linkedIn: 'https://www.linkedin.com/in/pranav-somu/'
    },
    {
      name: 'Ken Shibata',
      role: 'Project Lead - VR State Analysis',
      schoolYear: '1st Year',
      image: 'assets/ken.JPG',
      linkedIn: 'https://www.linkedin.com/in/ken-shibata/'
    },

    {
      name: 'Aaron Lee',
      role: 'Project Lead - Stinger Bus Delay',
      schoolYear: '2nd Year',
      image: 'assets/aaron.jpeg',
      linkedIn: 'https://www.linkedin.com/in/aaronlee1031'
    },
    {
      name: 'Ruhi Patel',
      role: 'Project Lead - Stinger Bus Delay',
      schoolYear: '1st Year',
      image: 'assets/ruhi.jpg',
      linkedIn: 'https://www.linkedin.com/in/ruhi-patel-749144246'
    },
    {
      name: 'Parth Parikh',
      role: 'Project Lead - SimpliEarn',
      schoolYear: '1st Year',
      image: 'assets/parth.jpg',
      linkedIn: 'https://www.linkedin.com/in/parthparikh04'
    },
    {
      name: 'Vidyut Rajagopal',
      role: 'Project Lead - SimpliEarn',
      schoolYear: '1st Year',
      image: 'assets/vidyut.jpeg',
      linkedIn: 'https://www.linkedin.com/in/vidyut-rajagopal//'
    },
    {
      name: 'Ritwij Ghosh',
      role: 'Project Lead - SimpliEarn',
      schoolYear: '1st Year',
      image: 'assets/ritwij.jpeg',
      linkedIn: 'https://www.linkedin.com/in/ritwij-ghosh-6532a923b/'
    },
    {
      name: 'Nehal Singhal',
      role: 'Project Lead - DataGen',
      schoolYear: '1st Year',
      image: 'assets/nehal.jpeg',
      linkedIn: 'https://www.linkedin.com/in/nehal-singhal-b56a891ab/'
    },
    {
      name: 'Riyan Patel',
      role: 'Project Lead - DataGen',
      schoolYear: '1st Year',
      image: 'assets/riyanp.JPG',
      linkedIn: 'http://www.linkedin.com/in/riyan-patel17'
    },
    {
      name: 'Abhik Mojumdar',
      role: 'Project Lead - DataGen',
      schoolYear: '1st Year',
      image: 'assets/abhik.jpeg',
      linkedIn: 'https://www.linkedin.com/in/abhik-mojumdar-596a372b9/'
    },
  ];

  constructor() { }

  getTeamMembers(): Observable<TeamMember[]> {
    return of(this.teamMembers);
  }
}