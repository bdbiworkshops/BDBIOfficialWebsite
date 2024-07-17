import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { LandingComponent } from '../landing/landing.component';
import { ProjectsComponent } from '../projects/projects.component';
import { BenefitsComponent } from '../benefits/benefits.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, LandingComponent, ProjectsComponent, BenefitsComponent, ContactComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}