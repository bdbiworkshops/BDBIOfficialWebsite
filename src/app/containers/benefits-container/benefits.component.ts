import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerCardComponent } from '../../components/power-card/power-card.component';
import { Power, PowersService } from '../../services/powers.service';


@Component({
  selector: 'benefits-container',
  standalone: true,
  imports: [CommonModule, PowerCardComponent],
  templateUrl: './benefits.component.html',
})
export class BenefitsContainerComponent implements OnInit {
  benefits: Power[] = [];

  constructor(private powersService: PowersService) {}

  ngOnInit() {
    this.benefits = this.powersService.getPowers();
  }
}