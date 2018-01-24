import { CodeModalComponent } from './components/code-modal/code-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DraggableDirective } from './directives/draggable.directive';
import { DropTargetDirective } from './directives/drop-target.directive';
import { ButtonComponent, InputComponent, CheckboxGroupComponent, PageElementEditMenuComponent } from './index.js';
import { FormsModule } from '@angular/forms';
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
    CodeModalComponent,
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
