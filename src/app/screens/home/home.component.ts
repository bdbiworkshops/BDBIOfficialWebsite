import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../containers/navbar-container/navbar.component';
import { LandingComponent } from '../../containers/landing-container/landing.component';
import { ProjectsComponent } from '../../containers/projects-container/projects.component';
import { BenefitsComponent } from '../../containers/benefits-container/benefits.component';
import { ContactComponent } from '../../containers/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, LandingComponent, ProjectsComponent, BenefitsComponent, ContactComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}