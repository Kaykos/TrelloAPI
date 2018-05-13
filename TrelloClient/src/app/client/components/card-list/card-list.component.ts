import { DataWrapperService } from './../../shared/services/data-wrapper.service';
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
  listName = '';

  @Input() list: List;
  constructor(public service: TrelloService, private dataService: DataWrapperService) { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.listName = this.list.name;
    if (this.list.id) {
      this.service.getListCards(this.list.id).subscribe(cards => this.cards = cards);
    } else {
      this.cards = [];
    }
  }

}
