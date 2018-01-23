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

  constructor(
    private showEditMenuStatusService: ShowEditElementMenuStatusService
  ) { }

  ngOnInit() {
  }

  onClick(event) {
    this.showEditMenu = this.showEditMenuStatusService.checkIfInDropzoneArea(event.target.offsetParent, this.showEditMenu);
  }

}
