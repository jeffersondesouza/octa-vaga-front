import { Component, OnInit } from '@angular/core';
import { PageElement } from '../../index';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, PageElement {


  showEditMenu = false;

  constructor() { }

  ngOnInit() {
  }

  onClick(event) {
    this.showEditMenu = !this.showEditMenu;
  }

}
