import { Component, Input } from '@angular/core';
import { TeamMember } from '../../services/team.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'team-card',
  templateUrl: './team-card.component.html',
  imports: [
    MatCardModule,
    CommonModule
  ]
})
export class TeamCardComponent {
  @Input() member!: TeamMember;

  openLinkedIn(url: string): void {
    window.open(url, '_blank');
  }
}