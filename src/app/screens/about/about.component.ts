import { Component } from '@angular/core';
import { TeamContainerComponent } from '../../containers/team-container/team-container.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    TeamContainerComponent
  ],
  templateUrl: './about.component.html',
})
export class AboutComponent {

}
