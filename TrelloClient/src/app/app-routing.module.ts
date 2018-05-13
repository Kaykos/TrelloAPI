import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardListComponent } from './client/components/board-list/board-list.component';

const routes: Routes = [
  { path: 'trello/board-list', component: BoardListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'trello/board-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
