import { DataWrapperService } from './client/shared/services/data-wrapper.service';
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
import { CardEditComponent } from './client/components/card-edit/card-edit.component';
import { CardDeleteComponent } from './client/components/card-delete/card-delete.component';
import { CardCreateComponent } from './client/components/card-create/card-create.component';
import { ClearTokenComponent } from './client/components/clear-token/clear-token.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardListComponent,
    CardListComponent,
    ListListComponent,
    CardEditComponent,
    CardDeleteComponent,
    CardCreateComponent,
    ClearTokenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TrelloService, DataWrapperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
