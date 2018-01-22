import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawBoardPageComponent } from './components/draw-board-page/draw-board-page.component';
import { DrawWebsiteBoardRoutingModule } from './draw-website-board.routing';

@NgModule({
  imports: [
    CommonModule,
    DrawWebsiteBoardRoutingModule
  ],
  declarations: [DrawBoardPageComponent]
})
export class DrawWebsiteBoardModule { }
