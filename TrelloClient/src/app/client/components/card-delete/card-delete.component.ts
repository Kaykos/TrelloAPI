import { TrelloService } from './../../shared/services/trello.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-delete',
  templateUrl: './card-delete.component.html',
  styleUrls: ['./card-delete.component.css']
})
export class CardDeleteComponent implements OnInit {

  statusMessage = '';

  constructor(private route: ActivatedRoute, private router: Router, private service: TrelloService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.service.deleteCard(params.get('id')).subscribe(() => {
        this.statusMessage = 'Card deleted';
      }, error => {
        this.statusMessage = 'Error deleting card: Card did not exist';
      });
  });
  }

}
