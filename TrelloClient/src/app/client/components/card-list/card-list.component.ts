import { List } from './../../shared/models/list';
import { Card } from './../../shared/models/card';
import { TrelloService } from './../../shared/services/trello.service';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit, OnChanges{

  cards: Card[] = [];

  @Input() list: List;
  constructor(public service: TrelloService) { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.list.id) {
      this.service.getListVards(this.list.id).subscribe(cards => this.cards = cards);
    }
  }

}
