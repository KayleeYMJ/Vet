import { Component } from '@angular/core';

import { appointments } from '../appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent {
  appointments = [...appointments];

  // share() {
  // window.alert('The product has been shared!');
  // }

  //onNotify() {
  // window.alert('You will be notified when the product goes on sale');
  //
}
