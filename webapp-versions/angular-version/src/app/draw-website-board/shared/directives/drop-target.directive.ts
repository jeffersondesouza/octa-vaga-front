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

    if (this.hasDraggedElementDataTransferd(event.dataTransfer)) {

      const draggdedElementId = this.getDraggedElementId(event.dataTransfer);
      const draggedElement: HTMLElement = this.createHtmelElement(draggdedElementId);

      const { positionX, positionY } = this.calculateElementPosition(this.elementRef, draggedElement, event);

      this.positioningDraggedElement(this.elementRef, draggedElement, positionX, positionY);

      if (this.isRepositioningDraggedElement(draggdedElementId)) {
        this.dropZoneService.emitCreateNewElement({ elementId: draggdedElementId });
      }
    }
  }

  hasDraggedElementDataTransferd(dataTransfer): boolean {
    return dataTransfer.getData('Text');
  }

  getDraggedElementId(dataTransfer) {
    return JSON.parse(dataTransfer.getData('Text'));
  }

  createHtmelElement(draggdedElementId) {
    return <HTMLElement>document.getElementById(draggdedElementId);
  }


  calculateElementPosition(parentElementRef, draggedElement, event) {
    const positionX = parentElementRef.nativeElement.offsetLeft - event.clientX - draggedElement.offsetWidth;
    const positionY = parentElementRef.nativeElement.offsettop - event.clientY - draggedElement.offsetHeight;
    return { positionX, positionY };
  }

  positioningDraggedElement(parentElementRef, draggedElement, positionX, positionY) {
    this.renderer.setStyle(parentElementRef.nativeElement, 'position', 'relative');
    this.renderer.setAttribute(draggedElement, 'id', `${Math.random()}`);
    this.renderer.setStyle(draggedElement, 'position', 'absolute');
    this.renderer.setStyle(draggedElement, 'left', `${Math.abs(positionX)}px`);
    this.renderer.setStyle(draggedElement, 'top', `${Math.abs(positionY)}px`);
    this.renderer.appendChild(this.elementRef.nativeElement, draggedElement);
  }

  isRepositioningDraggedElement(draggdedElementId) {
    // we repositioning a element form, the id is changed from a string type to float type
    return !parseFloat(draggdedElementId);
  }

}
