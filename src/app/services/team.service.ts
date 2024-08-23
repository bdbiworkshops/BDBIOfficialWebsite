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
      name: 'John Doe',
      role: 'President',
      schoolYear: 'Senior',
      image: 'assets/images/john-doe.jpg',
      linkedIn: 'https://www.linkedin.com/in/johndoe'
    },
    {
      name: 'Jane Smith',
      role: 'Vice President',
      schoolYear: 'Junior',
      image: 'assets/images/jane-smith.jpg',
      linkedIn: 'https://www.linkedin.com/in/janesmith'
    },
    // Add more team members as needed
  ];

  constructor() { }

  getTeamMembers(): Observable<TeamMember[]> {
    return of(this.teamMembers);
  }
}