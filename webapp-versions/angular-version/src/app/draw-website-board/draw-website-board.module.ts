import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawBoardPageComponent } from './components/draw-board-page/draw-board-page.component';
import { DrawWebsiteBoardRoutingModule } from './draw-website-board.routing';
import { ToolboxComponent } from './components/toolbox/toolbox.component';
import { DropzoneComponent } from './components/dropzone/dropzone.component';

@NgModule({
  imports: [
    CommonModule,
    DrawWebsiteBoardRoutingModule
  ],
  declarations: [DrawBoardPageComponent, ToolboxComponent, DropzoneComponent]
})
export class DrawWebsiteBoardModule { }
