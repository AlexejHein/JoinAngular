import { Component } from '@angular/core';
import {MatCard} from "@angular/material/card";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCard
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
