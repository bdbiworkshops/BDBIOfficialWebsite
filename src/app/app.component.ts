import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarContainerComponent } from "./containers/navbar-container/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BDBI-Website';
}
