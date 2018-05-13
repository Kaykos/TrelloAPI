import { DataWrapperService } from './../../shared/services/data-wrapper.service';
import { TrelloService } from './../../shared/services/trello.service';
import { Board } from './../../shared/models/board';
import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {

  boards: Board[] = [];
  selectedBoard: Board = new Board();

  constructor(public service: TrelloService, private dataService: DataWrapperService, private renderer: Renderer2) {
    this.renderer.listen('window', 'message', this.receiveMessage.bind(this));
   }

  ngOnInit() {
    if (this.service.token !== '') {
      this.service.getBoards().subscribe(boards => this.boards = boards);
    }
  }

  requestToken() {
    window.open(this.service.authorizeUrl);
  }

  receiveMessage(event: MessageEvent) {
    if (event.origin === 'https://trello.com') {
      event.source.close();
      if (event.data) {
        this.service.token = event.data;
        localStorage.setItem('token', event.data);
        this.service.getBoards().subscribe(boards => this.boards = boards);
      }
    }
  }

  selectBoard(board: Board) {
    this.selectedBoard = board;
    this.dataService.selectedBoard = board;
  }
}
