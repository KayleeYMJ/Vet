import { Component } from '@angular/core';
import { GlobalService } from '../global.service';
import { appointments } from '../appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent {
  appointments : { 
    id: number;
    pet: string;
    date: string;
    owner: string;
    contact: number;
    page: number; 
  }[];
  currentPage : number ;

  constructor(private globalService: GlobalService) {
    this.appointments = this.globalService.appointment,
    this.currentPage = this.globalService.currentPage
  };

  // share() {
  // window.alert('The product has been shared!');
  // }

  //onNotify() {
  // window.alert('You will be notified when the product goes on sale');
  //
}
