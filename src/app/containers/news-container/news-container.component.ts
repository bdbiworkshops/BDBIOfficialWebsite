// banner.component.ts
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'news-container',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './news-container.component.html',
  styles: []
})
export class NewsContainerComponent {
  @Input() details: string = '';

}