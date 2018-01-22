import { DrawBoardPageComponent } from './components/draw-board-page/draw-board-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const drawRoutes: Routes = [
  { path: '', component: DrawBoardPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(drawRoutes)],
  exports: [RouterModule],
})
export class DrawWebsiteBoardRoutingModule { }
