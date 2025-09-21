import { Component, signal } from '@angular/core';
import { Thing } from './models/thing';
import { STUFF } from '../data/db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DeepDive');

    stuff: Thing[] = STUFF;

}
