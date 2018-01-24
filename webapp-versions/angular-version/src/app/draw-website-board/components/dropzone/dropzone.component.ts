import { Component, OnInit, OnDestroy, ElementRef, Renderer2, HostBinding } from '@angular/core';

import { DragService, DropZoneService } from './../../shared';
import { HtmlGeneratorService } from './../../shared/services/html-generator.service';

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.scss']
})
export class DropzoneComponent {

  hasElementOver = false;
  isHtmlEmpty = true;

  private draggedElement;
  private positionX = 0;
  private positionY = 0;

  constructor(
    private dragService: DragService,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private dropZoneService: DropZoneService,
    private htmlGeneratorService: HtmlGeneratorService,
  ) { }

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
    this.draggedElement = event.target;
    this.move(this.draggedElement, Math.abs(this.positionX), Math.abs(this.positionY));
    this.saveGeneratedHtmlCode();
  }

  onDrop(event) {
    const dropzoneElement = document.getElementById('dropzone');
    this.positionX -= dropzoneElement.offsetLeft;
    this.positionY -= dropzoneElement.offsetTop;
    this.saveGeneratedHtmlCode();

    this.hasElementOver = false;
    this.isHtmlEmpty = false;

  }




  ondragover(event) {
    event.preventDefault();
    this.hasElementOver = true;
    console.log(event.target)
  }

  move(elment, x: number, y: number) {
    if (!x || !y) { return; }
    this.renderer.setStyle(elment, 'top', `${y}px`);
    this.renderer.setStyle(elment, 'left', `${x}px`);
  }

  saveGeneratedHtmlCode() {
    this.htmlGeneratorService.emmitHtmlCodeChanges(document.getElementById('dropzone').outerHTML);
  }

}
