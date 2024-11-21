import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Makes the service global
})
export class GlobalService {
  public item: number = 10;
  public currentPage: number = 1; 
  public totalPage: number = 0;
  //public apiUrl: string = 'http://localhost:3000/api';
  // Additional global variables or methods can be added here

  constructor() {}
}