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
      name: 'Parth Parikh',
      role: 'President',
      schoolYear: '2nd Year',
      image: 'assets/parth.jpg',
      linkedIn: 'https://www.linkedin.com/in/parthparikh04'
    },
    {
      name: 'Vidyut Rajagopal',
      role: 'Vice President',
      schoolYear: '2nd Year',
      image: 'assets/vidyut.jpeg',
      linkedIn: 'https://www.linkedin.com/in/vidyut-rajagopal/'
    },
    {
      name: 'Samyak Jain',
      role: 'Data Visualization Workshop Lead',
      schoolYear: 'Masters',
      image: 'assets/samyak.jpg',
      linkedIn: 'https://www.linkedin.com/in/jsamyak/'
    },
    {
      name: 'Sai Lalith Kanumuri',
      role: 'Platform Workshop Lead',
      schoolYear: '3rd Year',
      image: 'assets/sai.jpg',
      linkedIn: 'https://www.linkedin.com/in/sai-lalith-kanumuri-762768259/'
    },

    {
      name: 'Sarvesh Tiku',
      role: 'Data Analysis Workshop Lead',
      schoolYear: '2nd Year',
      image: 'assets/sarvesh.jpg',
      linkedIn: 'https://www.linkedin.com/in/sarveshtiku/'
    },
    {
      name: 'Heeba Merchant',
      role: 'Director of Marketing',
      schoolYear: '4th Year',
      image: 'assets/heeba.jpeg',
      linkedIn: 'https://www.linkedin.com/in/heebamerchant/'
    },
    {
      name: 'Madhu Subbiah',
      role: 'Director of Marketing',
      schoolYear: '2nd Year',
      image: 'assets/madhu.jpg',
      linkedIn: 'https://www.linkedin.com/in/madhusubbiah/'
    },
    {
      name: 'Ria Patel',
      role: 'Director of Sponsorship',
      schoolYear: '4th year',
      image: 'assets/ria.jpeg',
      linkedIn: 'https://www.linkedin.com/in/ria04patel/'
    },
    {
      name: 'Jeet Dekivadia',
      role: 'Director of Sponsorship',
      schoolYear: '2nd year',
      image: 'assets/jeet.jpg',
      linkedIn: 'https://www.linkedin.com/in/jeetdekivadia/'
    },
      {
      name: 'Zechariah Frierson',
      role: 'Digital Resource Manager',
      schoolYear: '2nd Year',
      image: 'assets/zech.jpg',
      linkedIn: 'https://www.linkedin.com/in/zechariah-frierson/'
    },
      {
      name: 'Ira Pathak',
      role: 'Director of Projects',
      schoolYear: '2nd Year',
      image: 'assets/ira.jpg',
      linkedIn: 'https://www.linkedin.com/in/irapathak/'
    },
    {
      name: 'Abhijay Salvi',
      role: 'Project Lead - PerfectPunch',
      schoolYear: '2nd Year',
      image: 'assets/abhijay.jpg',
      linkedIn: 'https://www.linkedin.com/in/abhijay-salvi/'
    },
    {
      name: 'Aditya Jain',
      role: 'Project Lead - PerfectPunch',
      schoolYear: '2nd Year',
      image: 'assets/aditya.jpg',
      linkedIn: 'https://www.linkedin.com/in/aditya-jain27/'
    },
    {
      name: 'Nimai Ponna',
      role: 'Project Lead - PerfectPunch',
      schoolYear: '2nd Year',
      image: 'assets/nimai.jpg',
      linkedIn: 'https://www.linkedin.com/in/nimai-ponna/'
    },
    {
      name: 'Shrey Agarwal',
      role: 'Project Lead - PerfectPunch',
      schoolYear: '2nd Year',
      image: 'assets/shrey.jpg',
      linkedIn: 'https://www.linkedin.com/in/agshrey1/'
    },
    {
      name: 'Ryan Clark',
      role: 'Project Lead - VR State Analysis',
      schoolYear: '4th Year',
      image: 'assets/ryan.jpeg',
      linkedIn: 'https://www.linkedin.com/in/ryangerhardclark/'
    },
        {
      name: 'Ken Shibata',
      role: 'Project Lead - VR State Analysis',
      schoolYear: '2nd Year',
      image: 'assets/ken.JPG',
      linkedIn: 'https://www.linkedin.com/in/ken-shibata/'
    },
    {
      name: 'Andrew Romitti',
      role: 'Project Lead - TerraTrends',
      schoolYear: '2nd Year',
      image: 'assets/andrew.jpg',
      linkedIn: 'https://www.linkedin.com/in/aromitti/'
    },
    {
      name: 'Aayush Patel',
      role: 'Project Lead - TerraTrends',
      schoolYear: '2nd Year',
      image: 'assets/aayush.jpg',
      linkedIn: 'https://www.linkedin.com/in/aysh-ptl/'
    },
    {
      name: 'Aaron Lee',
      role: 'Project Lead - Stinger Bus Delay',
      schoolYear: '3rd Year',
      image: 'assets/aaron.jpeg',
      linkedIn: 'https://www.linkedin.com/in/aaronlee1031'
    },
    {
      name: 'Ruhi Patel',
      role: 'Project Lead - Stinger Bus Delay',
      schoolYear: '2nd Year',
      image: 'assets/ruhi.jpg',
      linkedIn: 'https://www.linkedin.com/in/ruhi-patel-749144246'
    },
    {
      name: 'Gauri Sharma',
      role: 'Project Lead - SimpliEarn',
      schoolYear: '2nd Year',
      image: 'assets/gauri.jpg',
      linkedIn: 'https://www.linkedin.com/in/gs-softwaredev/'
    },
    {
      name: 'Vidyut Rajagopal',
      role: 'Project Lead - SimpliEarn',
      schoolYear: '2nd Year',
      image: 'assets/vidyut.jpeg',
      linkedIn: 'https://www.linkedin.com/in/vidyut-rajagopal//'
    },
    {
      name: 'Ritwij Ghosh',
      role: 'Project Lead - SimpliEarn',
      schoolYear: '2nd Year',
      image: 'assets/ritwij.jpeg',
      linkedIn: 'https://www.linkedin.com/in/ritwij-ghosh-6532a923b/'
    },
    {
      name: 'Nehal Singhal',
      role: 'Project Lead - DataGen',
      schoolYear: '2nd Year',
      image: 'assets/nehal.jpeg',
      linkedIn: 'https://www.linkedin.com/in/nehal-singhal-b56a891ab/'
    },
    {
      name: 'Riyan Patel',
      role: 'Project Lead - DataGen',
      schoolYear: '2nd Year',
      image: 'assets/riyanp.JPG',
      linkedIn: 'http://www.linkedin.com/in/riyan-patel17'
    },
    {
      name: 'Abhik Mojumdar',
      role: 'Project Lead - DataGen',
      schoolYear: '2nd Year',
      image: 'assets/abhik.jpeg',
      linkedIn: 'https://www.linkedin.com/in/abhik-mojumdar-596a372b9/'
    },
    {
      name: 'Paarth Mishra',
      role: 'Project Lead - DataGen',
      schoolYear: '2nd Year',
      image: 'assets/paarthmishra.png',
      linkedIn: 'https://www.linkedin.com/in/paarth-mishra-58331a217/'
    },
        {
      name: 'Jevon Twitty',
      role: 'Project Lead - FishCast',
      schoolYear: '3rd Year',
      image: 'assets/jevon.jpg',
      linkedIn: 'https://www.linkedin.com/in/jevon-twitty-4a13a928b/'
    },
    {
      name: 'Nash Moore',
      role: 'Project Lead - FishCast',
      schoolYear: '2nd Year',
      image: 'assets/nash.jpg',
      linkedIn: 'https://www.linkedin.com/in/nash-moore-82468b279/'
    },
    {
      name: 'Paul Evans',
      role: 'Project Lead - FishCast',
      schoolYear: '3rd Year',
      image: '',
      linkedIn: ''
    },
        {
      name: 'Rick Lee',
      role: 'Project Lead - Aquatic Sustainability',
      schoolYear: '2nd Year',
      image: 'assets/rick.jpg',
      linkedIn: 'https://www.linkedin.com/in/rlee06/'
    },
    {
      name: 'Michael Xu',
      role: 'Project Lead - Aquatic Sustainability',
      schoolYear: '3rd Year',
      image: 'assets/michaelxu.jpg',
      linkedIn: 'https://www.linkedin.com/in/michael-xu-7722b930b/'
    },
            {
      name: 'Ayush Narain',
      role: 'Project Lead - SmartPathAI',
      schoolYear: '2nd Year',
      image: 'assets/ayushnar.jpeg',
      linkedIn: 'https://www.linkedin.com/in/asnarain/'
    },
    {
      name: 'Parth Dangi',
      role: 'Project Lead - SmartPathAI',
      schoolYear: '3rd Year',
      image: 'assets/parthdangi.jpeg',
      linkedIn: 'https://www.linkedin.com/in/parth-dangi/'
    },
  ];

  constructor() { }

  getTeamMembers(): Observable<TeamMember[]> {
    return of(this.teamMembers);
  }
}