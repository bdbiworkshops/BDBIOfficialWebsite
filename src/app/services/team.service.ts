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
      image: '../../assets/saniya.jpeg',
      linkedIn: 'https://www.linkedin.com/in/ssrivastava22/'
    },
    {
        name: 'Gabriel Ragy',
        role: 'Vice President & Project Lead - Flight Delay Prediction',
        schoolYear: '4th Year',
        image: '../../assets/gabe.jpg',
        linkedIn: 'https://www.linkedin.com/in/gabrielragy/'
    },
    {
        name: 'Ria Patel',
        role: 'Data Visualization Workshop Lead',
        schoolYear: '3rd Year',
        image: '../../assets/Ria.jpg',
        linkedIn: 'https://www.linkedin.com/in/ria04patel'
    },
    {
        name: 'Quan Le',
        role: 'Platform Workshop Lead',
        schoolYear: '3rd Year',
        image: '../../assets/Quan.jpg',
        linkedIn: 'https://www.linkedin.com/in/quan-le14'
    },
    {
      name: 'Drishti Jain',
      role: 'Analysis Workshop Lead',
      schoolYear: 'Masters',
      image: '../../assets/drishti.jpeg',
      linkedIn: 'http://linkedin.com/in/jaindrishti/'
    },
    {
      name: 'Heeba Merchant',
      role: 'Director of Marketing',
      schoolYear: '4th Year',
      image: '../../assets/heeba.jpeg',
      linkedIn: 'www.linkedin.com/in/heebamerchant'
    },
    {
      name: 'Edison Hong',
      role: 'Director of Events',
      schoolYear: '2nd Year',
      image: '../../assets/Eddy.jpeg',
      linkedIn: 'https://www.linkedin.com/in/edisonhong/'
  },
  {
    name: 'Srimaaye Jegannathan',
    role: 'Director of Sponsorship',
    schoolYear: '3rd Year',
    image: '../../assets/srimaaye.jpeg',
    linkedIn: 'https://www.linkedin.com/in/edisonhong/'
},
{
  name: 'Ari Nair',
  role: 'Project Lead - Flight Delay Prediction',
  schoolYear: '3rd Year',
  image: '../../assets/ari.jpeg',
  linkedIn: 'https://www.linkedin.com/in/ari-nair/'
},
    {
        name: 'Ibhan Aggarwal',
        role: 'Project Lead - Agricultural Productivity',
        schoolYear: '2nd Year',
        image: '../../assets/Ibhan.jpg',
        linkedIn: 'https://www.linkedin.com/in/ibhan-aggarwal//'
    },
    {
      name: 'Pranav Somu',
      role: 'Project Lead - Agricultural Productivity',
      schoolYear: '2nd Year',
      image: '../../assets/pranav2.jpg',
      linkedIn: 'https://www.linkedin.com/in/pranav-somu/'
    },
    {
      name: 'Naman Talreja',
      role: 'Project Lead - SmartPathAI',
      schoolYear: '2nd Year',
      image: '../../assets/naman.jpeg',
      linkedIn: 'https://www.linkedin.com/in/naman-talreja/'
  },
    {
        name: 'Reese Jednorozec',
        role: 'Project Lead - Protein Synthesis',
        schoolYear: '4th Year',
        image: '../../assets/Reese.jpg',
        linkedIn: 'https://www.linkedin.com/in/reese-jednorozec/'
    },
    {
      name: 'Pranav Narala',
      role: 'Project Lead - Protein Synthesis',
      schoolYear: '2nd Year',
      image: '../../assets/Pranav.jpg',
      linkedIn: 'https://www.linkedin.com/in/pranavnarala/'
  },
    {
        name: 'Ryan Clark',
        role: 'Project Lead - VR State Analysis',
        schoolYear: '4th Year',
        image: '../../assets/Ryan.jpg',
        linkedIn: 'https://www.linkedin.com/in/ryangerhardclark/'
    },
    {
      name: 'Prithiv Premkumar',
      role: 'Project Lead - VR State Analysis',
      schoolYear: '2nd Year',
      image: '../../assets/prithiv.jpg',
      linkedIn: 'https://www.linkedin.com/in/prithiv-premkumar/'
    },
    {
        name: 'Huaijin Tony Tu',
        role: 'Project Lead - MemoirAI',
        schoolYear: '4th Year',
        image: '../../assets/Tony.jpg',
        linkedIn: 'https://www.linkedin.com/in/huaijin-tu-912627224/'
    },
  
{
  name: 'Raymond Zeng',
  role: 'Project Lead - Arrythmia Detection',
  schoolYear: '2nd Year',
  image: '../../assets/raymond.jpeg',
  linkedIn: 'https://www.linkedin.com/in/raymondrzeng/'
},





    // Add more team members as needed
  ];

  constructor() { }

  getTeamMembers(): Observable<TeamMember[]> {
    return of(this.teamMembers);
  }
}