import { Component, signal } from '@angular/core';
import { NavBar } from "./components/nav-bar/nav-bar";
import { Intro } from "./components/intro/intro";
import { Works } from "./components/works/works";
import { Contacts } from "./components/contacts/contacts";

@Component({
  selector: 'app-root',
  imports: [NavBar, Intro, Works, Contacts],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mildred-campos');
}
