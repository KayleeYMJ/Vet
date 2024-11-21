import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent {
  @Input() pro: Appointment | undefined;
  @Output() notify = new EventEmitter();
}
