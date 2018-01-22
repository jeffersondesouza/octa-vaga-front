import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlElementWrapperComponent } from './components/html-element-wrapper/html-element-wrapper.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { DraggableDirective } from './directives/draggable.directive';
import { DropTargetDirective } from './directives/drop-target.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HtmlElementWrapperComponent,
    InputComponent,
    ButtonComponent,
    DraggableDirective,
    DropTargetDirective,
  ],
  exports: [
    HtmlElementWrapperComponent,
    InputComponent,
    ButtonComponent,
    DraggableDirective,
    DropTargetDirective,
  ]

})
export class SharedModule { }
