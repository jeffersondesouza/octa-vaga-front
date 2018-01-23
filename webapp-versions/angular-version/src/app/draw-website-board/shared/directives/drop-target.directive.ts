import { Output, Directive, Input, HostListener, ElementRef, Renderer2, EventEmitter } from '@angular/core';

import { DropTargetOptions } from '../index';
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

    event.preventDefault();
  }

  @HostListener('drop', ['$event'])
  onDrop(event) {
    event.preventDefault();

    console.log(event.dataTransfer.getData('Text'));

    if (event.dataTransfer.getData('Text')) {

      const draggdedElementId = JSON.parse(event.dataTransfer.getData('Text'));
      const draggedElement: HTMLElement = <HTMLElement>document.getElementById(draggdedElementId).cloneNode(true);

      this.renderer.setStyle(this.elementRef.nativeElement, 'position', 'relative');
      this.renderer.setAttribute(draggedElement, 'id', `${Math.random()}`);
      this.renderer.setStyle(draggedElement, 'position', 'absolute');
      console.log(event.clientX);

      const positionX = this.elementRef.nativeElement.offsetLeft - event.clientX - draggedElement.offsetWidth;
      const positionY = this.elementRef.nativeElement.offsettop - event.clientY - draggedElement.offsetHeight;

      this.renderer.setStyle(draggedElement, 'left', `${Math.abs(positionX)}px`);
      this.renderer.setStyle(draggedElement, 'top', `${Math.abs(positionY)}px`);


      this.renderer.appendChild(this.elementRef.nativeElement, draggedElement);

    }

  }


}
