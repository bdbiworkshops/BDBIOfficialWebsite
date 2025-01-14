import { Component } from '@angular/core';
import { BannerComponent } from "../../components/banner/banner.component";


@Component({
  selector: 'landing-container',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingContainerComponent {

}
