import { Component, OnInit, ViewChild } from '@angular/core';

import { PageElement } from '../../index';
import { ShowEditElementMenuStatusService } from './../../services/show-edit-element-menu-status.service';
import { ButtonEditModalComponent } from '../button-edit-modal/button-edit-modal.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, PageElement {


  showOptionsMenu = false;
  showEditMenu = false;
  label = 'OK';
  fontSize = 16;
  bgColor;
  fgColor;
  width;
  height;

  constructor(
    private showEditMenuStatusService: ShowEditElementMenuStatusService
  ) { }

  ngOnInit() {
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
