import { Card } from './../models/card';
import { List } from './../models/list';
import { environment } from './../../../../environments/environment';
import { AppComponent } from './../../../app.component';
import { Board } from './../models/board';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TrelloService {

  apiBase = environment.apiBase;
  /* authorizeUrl = 'https://api.trello.com/1/authorize/?' +
  'scope=read,write&expiration=1dayr&name=MyTrelloAPITest&' +
  'key=eec48df0b4b37a399f43e7b7a6a585f2&response_type=token&' +
  'callback_method=postMessage&return_url=http://localhost:4200/trello/board-list'; */
  authorizeUrl = 'https://api.trello.com/1/authorize/?' +
  'scope=read,write&expiration=1day&name=MyTrelloAPITest&' +
  'key=eec48df0b4b37a399f43e7b7a6a585f2&response_type=token&' +
  'callback_method=postMessage&return_url=' + environment.clientUrl + '/trello/board-list';
  token = '';

  constructor(private http: HttpClient) {
    if (localStorage.getItem('token') !== null) {
      this.token = localStorage.getItem('token');
    }
   }

  getBoards(): Observable<Board[]> {
    const url = this.apiBase + '/boards';
    return this.http.post<Board[]>(url, this.token);
  }

  getBoardLists(boardId: string): Observable<List[]> {
    const url = this.apiBase + '/boards/' + boardId + '/lists';
    return this.http.post<List[]>(url, this.token);
  }

  getListVards(listId: string): Observable<Card[]> {
    const url = this.apiBase + '/lists/' + listId + '/cards';
    return this.http.post<Card[]>(url, this.token);
  }
}
