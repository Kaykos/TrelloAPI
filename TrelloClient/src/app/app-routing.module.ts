import { CardCreateComponent } from './client/components/card-create/card-create.component';
import { CardDeleteComponent } from './client/components/card-delete/card-delete.component';
import { CardEditComponent } from './client/components/card-edit/card-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardListComponent } from './client/components/board-list/board-list.component';

const routes: Routes = [
  { path: 'trello/board-list', component: BoardListComponent },
  { path: 'trello/card-create', component: CardCreateComponent},
  { path: 'trello/card-edit/:id', component: CardEditComponent},
  { path: 'trello/card-delete/:id', component: CardDeleteComponent},
  { path: '', pathMatch: 'full', redirectTo: 'trello/board-list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
