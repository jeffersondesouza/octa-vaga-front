import { Directive, Input, Output, EventEmitter, ElementRef, Renderer2 } from '@angular/core';
import { HostBinding, HostListener } from '@angular/core';

import { DragService } from './../services/drag.service';
import { DraggableOptions } from '../index';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {



  private options: DraggableOptions = {};

  constructor(
    private dragService: DragService,
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) { }

  @HostBinding('draggable') get draggable() {
    return true;
  }

  @Output() drag = new EventEmitter();

  @Input()
  set appDraggable(options: DraggableOptions) {
    if (options) {
      this.options = options;
    }
  }


  @HostListener('dragstart', ['$event'])
  onDragStart(event) {
    console.log(event);
    const { zone = 'zone', draggdedElementId = 'dropzone' } = this.options;
    this.dragService.startDrag(zone);

    console.log(event);
    event.dataTransfer.setData('Text', JSON.stringify(event.target.id));

  }
}

