import { Card } from './../../shared/models/card';
import { TrelloService } from './../../shared/services/trello.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css']
})
export class CardEditComponent implements OnInit {

  card: Card = new Card();

  constructor(private route: ActivatedRoute, private router: Router, private service: TrelloService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.service.getCard(params.get('id')).subscribe(card => {
        this.card = card;
        if (this.card.due) {
          this.card.due = this.card.due.substr(0, 10);
        }
      });
    });
  }

  editCard() {
    this.service.editCard(this.card).subscribe(response => {
      this.router.navigate(['/trello/board-list']);
    });
  }

}
