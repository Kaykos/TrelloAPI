import { Board } from './../models/board';
import { List } from './../models/list';
import { Injectable } from '@angular/core';

@Injectable()
export class DataWrapperService {

  selectedBoard: Board = new Board();
  selectedList: List = new List();

  constructor() { }

}
