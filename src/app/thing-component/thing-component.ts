import { Component, Input } from '@angular/core';
import { Thing } from '../models/thing';

@Component({
  selector: 'app-thing-component',
  standalone: false,
  templateUrl: './thing-component.html',
  styleUrl: './thing-component.css'
})
export class ThingComponent {

  @Input()
  thing: Thing;
  
}
