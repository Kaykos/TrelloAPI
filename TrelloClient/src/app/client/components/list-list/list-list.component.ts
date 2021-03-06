import { DataWrapperService } from './../../shared/services/data-wrapper.service';
import { List } from './../../shared/models/list';
import { TrelloService } from './../../shared/services/trello.service';
import { Board } from './../../shared/models/board';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list-list',
  templateUrl: './list-list.component.html',
  styleUrls: ['./list-list.component.css']
})
export class ListListComponent implements OnInit, OnChanges {

  lists: List[] = [];
  selectedList: List = new List();
  boardName = '';

  @Input() board: Board;
  constructor(public service: TrelloService, private dataService: DataWrapperService) { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.boardName = this.board.name;
    if (this.board.id) {
      this.selectedList = new List();
      this.service.getBoardLists(this.board.id).subscribe(lists => this.lists = lists);
    }
  }

  selectList(list: List) {
    this.selectedList = list;
    this.dataService.selectedList = list;
  }

}
