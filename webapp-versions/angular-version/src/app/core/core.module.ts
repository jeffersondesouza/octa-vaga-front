import { DragService } from './../draw-website-board/shared/services/drag.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';

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
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
