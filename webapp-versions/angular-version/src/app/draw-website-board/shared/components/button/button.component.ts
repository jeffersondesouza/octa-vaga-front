import { Component, OnInit } from '@angular/core';

import { PageElement } from '../../index';
import { ShowEditElementMenuStatusService } from './../../services/show-edit-element-menu-status.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, PageElement {


  showOptionsMenu = false;
  showEditMenu = false;

  constructor(
    private showEditMenuStatusService: ShowEditElementMenuStatusService
  ) { }

  ngOnInit() {
  }

  onClick(event) {
    this.showOptionsMenu = this.showEditMenuStatusService.checkIfInDropzoneArea(event.target.offsetParent, this.showOptionsMenu);
  }

  onEditMenuOpen(event) {
    this.showEditMenu = true;
  }

}
