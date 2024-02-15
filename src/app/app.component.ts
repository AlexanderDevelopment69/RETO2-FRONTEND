import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HospitalComponent} from "./hospital/hospital.component";
import {LoginComponent} from "./login/login.component";
import {NavbarComponent} from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reto2-frontend';
}

