import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoComponent } from './components/logo/logo.component';
import { DropZoneService, DragService, ShowEditElementMenuStatusService } from '../draw-website-board/shared/index';
import { HtmlGeneratorService } from './services/html-generator.service';
import { NavbarComponent } from './index';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    NavbarComponent,
    LogoComponent
  ],
  providers: [
    DragService,
    DropZoneService,
    ShowEditElementMenuStatusService,
    HtmlGeneratorService,
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
