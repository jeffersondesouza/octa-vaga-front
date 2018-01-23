import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { DraggableDirective } from './directives/draggable.directive';
import { DropTargetDirective } from './directives/drop-target.directive';
import { PageElementEditMenuComponent } from './components/page-element-edit-menu/page-element-edit-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InputComponent,
    ButtonComponent,
    DraggableDirective,
    DropTargetDirective,
    PageElementEditMenuComponent,
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    DraggableDirective,
    DropTargetDirective,
  ]

})
export class SharedModule { }
