import { Component, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavbarContainerComponent } from '../../containers/navbar-container/navbar.component';
import { LandingContainerComponent } from '../../containers/landing-container/landing.component';
import { ProjectsContainerComponent } from '../../containers/projects-container/projects.component';
import { BenefitsContainerComponent } from '../../containers/benefits-container/benefits.component';
import { ContactContainerComponent } from '../../containers/contact/contact.component';
import { FaqCardComponent } from "../../components/faq-card/faq-card.component";
import { FaqContainerComponent } from "../../containers/faq-container/faq-container.component";
import { NewsContainerComponent } from "../../containers/news-container/news-container.component";
import { CalendarContainerComponent } from '../../containers/calendar-container/calendar-container.component';
import { BannerComponent } from "../../components/banner/banner.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    NavbarContainerComponent,
    LandingContainerComponent,
    ProjectsContainerComponent,
    BenefitsContainerComponent,
    ContactContainerComponent,
    FaqCardComponent,
    FaqContainerComponent,
    NewsContainerComponent,
    CalendarContainerComponent,
    BannerComponent
],
  templateUrl: './home.component.html',
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('landingContainer', { static: false }) landingContainer!: ElementRef;
  showBackToTop = false;
  landingContainerHeight = 0;

  ngAfterViewInit() {
    setTimeout(() => {
      this.landingContainerHeight = this.landingContainer.nativeElement.offsetHeight;
      this.onWindowScroll();
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showBackToTop = scrollPosition > this.landingContainerHeight;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}