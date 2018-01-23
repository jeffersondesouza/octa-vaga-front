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

  private draggableOptions: DraggableOptions;

  constructor(
    private showEditMenuStatusService: ShowEditElementMenuStatusService

  ) { }

  ngOnInit() {
    this.draggableOptions = { zone: 'dropzone', draggdedElementId: 'input-label' };
  }

  onClick(event) {
    this.showEditMenu = this.showEditMenuStatusService.checkIfInDropzoneArea(event.target.offsetParent, this.showEditMenu);
  }


}
