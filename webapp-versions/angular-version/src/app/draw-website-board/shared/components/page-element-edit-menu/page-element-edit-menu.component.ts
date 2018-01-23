import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-element-edit-menu',
  templateUrl: './page-element-edit-menu.component.html',
  styleUrls: ['./page-element-edit-menu.component.scss']
})
export class PageElementEditMenuComponent implements OnInit {

  @Input() deleteButtonPosition: { top: number, left: number };

  constructor() { }

  ngOnInit() {
  }


}
