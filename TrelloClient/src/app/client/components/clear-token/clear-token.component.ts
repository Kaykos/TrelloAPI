import { TrelloService } from './../../shared/services/trello.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clear-token',
  templateUrl: './clear-token.component.html',
  styleUrls: ['./clear-token.component.css']
})
export class ClearTokenComponent implements OnInit {

  constructor(public service: TrelloService) { }

  ngOnInit() {
  }

  clearToken(){
    localStorage.removeItem('token');
    this.service.token = '';
  }

}
