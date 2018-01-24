import { ShowEditElementMenuStatusService } from './../../services/show-edit-element-menu-status.service';
import { Component, OnInit } from '@angular/core';
import { PageElement } from '../../index';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss']
})
export class CheckboxGroupComponent implements OnInit, PageElement {


  showEditMenu = false;
  showOptionsMenu = false;
  elementsLives = true;

  chekboxItems = ['Option 1', 'Option 2', 'Option 3'];
  label;
  fontSize;
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

  onAddCheckboxItem() {
    const newItem = `Option ${this.chekboxItems.length + 1}`;
    /* Imutable array version */
    this.chekboxItems = [...this.chekboxItems, newItem];
  }

  onElementDestroyed() {
    this.elementsLives = false;
  }

  onHideEditModal() {
    this.showEditMenu = false;
  }

  trackByChekboxItemId(index, item) {
    return item.id || index;
  }


  onEditMenuOpen(openMenu) {
    this.showEditMenu = openMenu;
  }
}
