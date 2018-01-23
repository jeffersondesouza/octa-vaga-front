import { Output, Directive, Input, HostListener, ElementRef, Renderer2, EventEmitter } from '@angular/core';

import { DropTargetOptions } from '../index';
import { DropZoneService } from './../services/drop-zone.service';
import { DragService } from './../services/drag.service';


@Directive({
  selector: '[appDropTarget]'
})
export class DropTargetDirective {


  private options: DropTargetOptions = {};

  constructor(
    private dragService: DragService,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private dropZoneService: DropZoneService,
  ) { }

  @Input()
  set appDropTarget(options: DropTargetOptions) {
    if (options) {
      this.options = options;
    }
  }

  @Output() drop = new EventEmitter();

  @HostListener('dragenter', ['$event'])
  @HostListener('dragover', ['$event'])
  onDragOver(event) {
    const { zone = 'zone' } = this.options;

    if (this.dragService.accepts(zone)) {
      event.preventDefault();
    }
  }

  @HostListener('drop', ['$event'])
  onDrop(event) {
    event.preventDefault();


    if (event.dataTransfer.getData('Text')) {

      const draggdedElementId = JSON.parse(event.dataTransfer.getData('Text'));
      const draggedElement: HTMLElement = <HTMLElement>document.getElementById(draggdedElementId);

      this.renderer.setStyle(this.elementRef.nativeElement, 'position', 'relative');
      this.renderer.setAttribute(draggedElement, 'id', `${Math.random()}`);
      this.renderer.setStyle(draggedElement, 'position', 'absolute');

      const positionX = this.elementRef.nativeElement.offsetLeft - event.clientX - draggedElement.offsetWidth;
      const positionY = this.elementRef.nativeElement.offsettop - event.clientY - draggedElement.offsetHeight;

      this.renderer.setStyle(draggedElement, 'left', `${Math.abs(positionX)}px`);
      this.renderer.setStyle(draggedElement, 'top', `${Math.abs(positionY)}px`);

      this.renderer.appendChild(this.elementRef.nativeElement, draggedElement);


      if (!parseFloat(draggdedElementId)) {
        this.dropZoneService.emitCreateNewElement({ elementId: draggdedElementId });
      }

    }

  }


}
