import { DataWrapperService } from './../../shared/services/data-wrapper.service';
import { Board } from './../../shared/models/board';
import { List } from './../../shared/models/list';
import { Card } from './../../shared/models/card';
import { TrelloService } from './../../shared/services/trello.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.css']
})
export class CardCreateComponent implements OnInit {

  newCard: Card = new Card();
  board: Board;
  list: List;

  constructor(private router: Router, private service: TrelloService, private dataService: DataWrapperService) { }

  ngOnInit() {
    this.newCard.due = null;
    this.newCard.desc = null;
    this.board = this.dataService.selectedBoard;
    this.list = this.dataService.selectedList;
  }

  insertCard() {
    this.service.createCard(this.list.id, this.newCard).subscribe(book => {
      this.router.navigate(['/trello/board-list']);
    });
  }

}
