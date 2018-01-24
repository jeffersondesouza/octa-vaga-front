import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LogoComponent } from './components/logo/logo.component';
import { DropZoneService, DragService, ShowEditElementMenuStatusService } from '../draw-website-board/shared/index';
import { HtmlGeneratorService } from './services/html-generator.service';
import { NavbarComponent } from './index';
import { FileGeneratorService } from './services/file-generator.service';

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
    FileGeneratorService
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
