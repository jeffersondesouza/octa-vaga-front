import { Directive } from '@angular/core';
import { HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {

  @HostBinding('draggable') get draggable() {
    return true;
  }

  @HostListener('keydown')
  onOver() {
    console.log('bi');
  }
}
