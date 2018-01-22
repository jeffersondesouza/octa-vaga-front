import { Directive, Input, HostListener } from '@angular/core';

import { DropTargetOptions } from '../index';
import { DragService } from './../services/drag.service';

@Directive({
  selector: '[appDropTarget]'
})
export class DropTargetDirective {


  private options: DropTargetOptions = {};
  constructor(private dragService: DragService) { }

  @Input()
  set appDropTarget(options: DropTargetOptions) {
    if (options) {
      this.options = options;
    }
  }

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
    const data =  JSON.parse(event.dataTransfer.getData('Text'));


    console.log(data);
    //this.drop.next(data);
  }


}
