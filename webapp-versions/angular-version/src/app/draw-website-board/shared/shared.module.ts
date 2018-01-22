import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlElementWrapperComponent } from './components/html-element-wrapper/html-element-wrapper.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { DraggableDirective } from './directives/draggable.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HtmlElementWrapperComponent,
    InputComponent,
    ButtonComponent,
    DraggableDirective
  ],
  exports: [
    HtmlElementWrapperComponent,
    InputComponent,
    ButtonComponent,
    DraggableDirective
  ]

})
export class SharedModule { }
