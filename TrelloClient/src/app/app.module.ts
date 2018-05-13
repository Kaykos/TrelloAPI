import { CardListComponent } from './client/components/card-list/card-list.component';
import { BoardListComponent } from './client/components/board-list/board-list.component';
import { ListListComponent } from './client/components/list-list/list-list.component';
import { TrelloService } from './client/shared/services/trello.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    BoardListComponent,
    CardListComponent,
    ListListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TrelloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
