// navbar.component.ts
import { Component, Inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, DOCUMENT } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'navbar-container',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatToolbarModule],
  templateUrl: './navbar.component.html',
})
export class NavbarContainerComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) {}

  navigateToSection(sectionId: string): void {
    if (this.router.url !== '/') {
      // If not on home page, navigate to home first
      this.router.navigate(['/'], { fragment: sectionId }).then(() => {
        this.scrollToSection(sectionId);
      });
    } else {
      // If already on home page, just scroll
      this.scrollToSection(sectionId);
    }
  }

  private scrollToSection(sectionId: string): void {
    const element = this.document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
}