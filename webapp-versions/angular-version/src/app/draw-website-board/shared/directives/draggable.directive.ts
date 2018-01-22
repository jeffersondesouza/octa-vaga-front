import { Directive, Input } from '@angular/core';
import { HostBinding, HostListener } from '@angular/core';

import { DragService } from './../services/drag.service';
import { DraggableOptions } from '../index';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {



  private options: DraggableOptions = {};

  constructor(private dragService: DragService) { }

  @HostBinding('draggable') get draggable() {
    return true;
  }


  @Input()
  set appDraggable(options: DraggableOptions) {
    if (options) {
      this.options = options;
    }
  }


  @HostListener('dragstart', ['$event'])
  onDragStart(event) {
    const { zone = 'zone', data = {} } = this.options;
    this.dragService.startDrag(zone);

    event.dataTransfer.setData('Text', JSON.stringify(data));
  }
}

