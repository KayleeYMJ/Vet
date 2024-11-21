import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Appointment } from '../appointment';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent {
  selectedValue: number;
  currentPage: number;
  totalPage: number;
  
  constructor(private globalService: GlobalService) {
    this.selectedValue = this.globalService.item,
    this.currentPage = this.globalService.currentPage,
    this.totalPage = this.globalService.totalPage
    };


  //@Input() pro: Appointment | undefined;
 // @Output() notify = new EventEmitter();
  options = [10,20,50,100];

  onChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.globalService.item = select.value ? parseFloat(select.value) : 10;
    this.selectedValue = this.globalService.item;
    this.globalService.currentPage = 1;
    this.currentPage = this.globalService.currentPage
  }

  nextPage(){
    this.globalService.currentPage += 1,
    this.currentPage = this.globalService.currentPage
  }

  lastPage(){
    this.globalService.currentPage -= 1,
    this.currentPage = this.globalService.currentPage
  }

}
