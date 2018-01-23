import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { DragService } from './../../shared';

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.scss']
})
export class DropzoneComponent implements OnInit {

  private draggedElement;

  private positionX = 0;
  private positionY = 0;

  constructor(
    private dragService: DragService,
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) { }


  ngOnInit() {
  }
  onDragStart(event) {

  }

  isDraggingFromDropZoneArea(dropElementId, dropZoneId) {
    return dropElementId === dropZoneId;
  }


  onDrag(event) {
    this.positionX = event.clientX;
    this.positionY = event.clientY;
  }

  onDragEnd(event) {
    console.log(this.positionX, this.positionY);
    this.draggedElement = event.target;

    this.move(this.draggedElement, Math.abs(this.positionX), Math.abs(this.positionY));
  }

  onDrop(event) {
    this.positionX -= event.target.offsetLeft;
    this.positionY -= event.target.offsetTop;
  }

  ondragover(event) {
    event.preventDefault();
  }

  move(elment, x: number, y: number) {
    if (!x || !y) { return; }
    this.renderer.setStyle(elment, 'top', `${y}px`);
    this.renderer.setStyle(elment, 'left', `${x}px`);
  }

}
