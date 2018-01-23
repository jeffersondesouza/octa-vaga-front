import { CodeModalComponent } from './components/code-modal/code-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DraggableDirective } from './directives/draggable.directive';
import { DropTargetDirective } from './directives/drop-target.directive';
import { ButtonComponent, InputComponent, CheckboxGroupComponent, PageElementEditMenuComponent } from './index.js';
import { ButtonEditModalComponent } from './components/button-edit-modal/button-edit-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    InputComponent,
    ButtonComponent,
    DraggableDirective,
    DropTargetDirective,
    PageElementEditMenuComponent,
    CheckboxGroupComponent,
    ButtonEditModalComponent,
    CodeModalComponent,

  ],
  exports: [
    InputComponent,
    ButtonComponent,
    DraggableDirective,
    DropTargetDirective,
    CheckboxGroupComponent,
    CodeModalComponent,
  ]

})
export class SharedModule { }
