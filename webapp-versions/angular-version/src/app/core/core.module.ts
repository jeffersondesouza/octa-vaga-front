import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { DropZoneService, DragService } from '../draw-website-board/shared/index';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    LogoComponent
  ],
  providers: [
    DragService,
    DropZoneService,
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
