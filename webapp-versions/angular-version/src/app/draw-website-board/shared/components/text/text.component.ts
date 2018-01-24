import { Component, OnInit } from '@angular/core';
import { PageElement, DraggableOptions } from '../../index';

import { ShowEditElementMenuStatusService } from './../../services/show-edit-element-menu-status.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit, PageElement {

  showEditMenu = false;
  elementsLives = true;

  showOptionsMenu;
  label = 'Titles or Text';
  fontSize = 16;
  bgColor;
  fgColor;
  width;
  height;

  private draggableOptions: DraggableOptions;

  constructor(
    private showEditMenuStatusService: ShowEditElementMenuStatusService
  ) { }

  ngOnInit() {
    this.draggableOptions = { zone: 'dropzone', draggdedElementId: 'text' };
  }

  onClick(event) {
    this.showOptionsMenu = this.showEditMenuStatusService.checkIfInDropzoneArea(event.target.offsetParent, this.showOptionsMenu);
  }

  onElementDestroyed() {
    this.elementsLives = false;
  }

  onEditMenuOpen(openMenu) {
    this.showEditMenu = openMenu;
  }

  onHideEditModal() {
    this.showEditMenu = false;
  }
}
