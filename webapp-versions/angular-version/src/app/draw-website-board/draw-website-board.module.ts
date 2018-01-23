import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawBoardPageComponent } from './components/draw-board-page/draw-board-page.component';
import { DrawWebsiteBoardRoutingModule } from './draw-website-board.routing';
import { ToolboxComponent } from './components/toolbox/toolbox.component';
import { DropzoneComponent } from './components/dropzone/dropzone.component';
import { SharedModule } from './shared';
import { ToolboxHeaderComponent } from './components/toolbox/toolbox-header/toolbox-header.component';
import { ToolboxElementsComponent } from './components/toolbox/toolbox-elements/toolbox-elements.component';
import { DragService } from './shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CodeModalComponent } from './components/code-modal/code-modal.component';

@NgModule({
  imports: [
    CommonModule,
    DrawWebsiteBoardRoutingModule,
    SharedModule,
    FormsModule,
  ],
  declarations: [
    DrawBoardPageComponent,
    ToolboxComponent,
    DropzoneComponent,
    ToolboxHeaderComponent,
    ToolboxElementsComponent,
    CodeModalComponent,
  ],

})
export class DrawWebsiteBoardModule { }
