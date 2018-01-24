import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LogoComponent } from './components/logo/logo.component';
import { FileGeneratorService } from './../draw-website-board/shared/services/file-generator.service';
import { HtmlGeneratorService } from './../draw-website-board/shared/services/html-generator.service';
import { DropZoneService, DragService, ShowEditElementMenuStatusService } from '../draw-website-board/shared/index';
import { NavbarComponent } from './index';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    NavbarComponent,
    LogoComponent,
  ],
  providers: [
    DragService,
    DropZoneService,
    ShowEditElementMenuStatusService,
    HtmlGeneratorService,
    FileGeneratorService,
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
