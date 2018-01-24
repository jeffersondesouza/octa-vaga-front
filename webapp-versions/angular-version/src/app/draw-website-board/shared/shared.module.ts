import { CodeModalComponent } from './components/code-modal/code-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DraggableDirective } from './directives/draggable.directive';
import { DropTargetDirective } from './directives/drop-target.directive';
import { ButtonComponent, InputComponent, CheckboxGroupComponent, PageElementEditMenuComponent } from './index.js';
import { ButtonEditModalComponent } from './components/button-edit-modal/button-edit-modal.component';
import { FormsModule } from '@angular/forms';
import { InputEditModalComponent } from './components/input-edit-modal/input-edit-modal.component';
import { PageElementEditorComponent } from './components/page-element-editor/page-element-editor.component';
import { CheckboxItemComponent } from './components/checkbox-group/checkbox-item/checkbox-item.component';

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
    InputEditModalComponent,
    PageElementEditorComponent,
    CheckboxItemComponent,

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
