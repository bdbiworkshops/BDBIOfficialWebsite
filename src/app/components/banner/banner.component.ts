// banner.component.ts
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: 'banner.component.html',
})
export class BannerComponent { }