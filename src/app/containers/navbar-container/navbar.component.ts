// navbar.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'navbar-container',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatToolbarModule],
  templateUrl: './navbar.component.html',
})
export class NavbarContainerComponent {
}