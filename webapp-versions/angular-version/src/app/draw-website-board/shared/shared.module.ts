import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DraggableDirective } from './directives/draggable.directive';
import { DropTargetDirective } from './directives/drop-target.directive';
import { ButtonComponent, InputComponent, CheckboxGroupComponent, PageElementEditMenuComponent } from './index.js';

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
    CheckboxGroupComponent,
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    DraggableDirective,
    DropTargetDirective,
    CheckboxGroupComponent
  ]

})
export class SharedModule { }
