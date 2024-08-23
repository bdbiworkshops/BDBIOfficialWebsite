import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamCardComponent } from '../../components/team-card/team-card.component';
import { TeamMember, TeamService } from '../../services/team.service';

@Component({
  selector: 'team-container',
  standalone: true,
  imports: [CommonModule, TeamCardComponent],
  templateUrl: './team-container.component.html'
})
export class TeamContainerComponent implements OnInit {
  teamMembers: TeamMember[] = [];

  constructor(private teamService: TeamService) {}

  ngOnInit() {
    this.teamService.getTeamMembers().subscribe(
      (members: TeamMember[]) => {
        this.teamMembers = members;
      },
      (error) => {
        console.error('Error fetching team members:', error);
        // Handle error as needed
      }
    );
  }
}