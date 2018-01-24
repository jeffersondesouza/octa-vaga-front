import { ShowEditElementMenuStatusService } from './../../services/show-edit-element-menu-status.service';
import { Component, OnInit } from '@angular/core';
import { DraggableOptions, PageElement } from '../../index';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, PageElement {

  showEditMenu = false;
  showOptionsMenu;

  label = 'Input';
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
    this.draggableOptions = { zone: 'dropzone', draggdedElementId: 'input-label' };
  }

  onClick(event) {
    this.showOptionsMenu = this.showEditMenuStatusService.checkIfInDropzoneArea(event.target.offsetParent, this.showOptionsMenu);

  }

  onEditMenuOpen(openMenu) {
    this.showEditMenu = openMenu;
  }

  onHideEditModal() {

    this.showEditMenu = false;
  }



}
