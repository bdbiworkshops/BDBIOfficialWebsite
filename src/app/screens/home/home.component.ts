import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarContainerComponent } from '../../containers/navbar-container/navbar.component';
import {  LandingContainerComponent } from '../../containers/landing-container/landing.component';
import { ProjectsContainerComponent } from '../../containers/projects-container/projects.component';
import { BenefitsContainerComponent } from '../../containers/benefits-container/benefits.component';
import { ContactContainerComponent } from '../../containers/contact/contact.component';
import { FaqCardComponent } from "../../components/faq-card/faq-card.component";
import { FaqContainerComponent } from "../../containers/faq-container/faq-container.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarContainerComponent, LandingContainerComponent, ProjectsContainerComponent, BenefitsContainerComponent, ContactContainerComponent, FaqCardComponent, FaqContainerComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}