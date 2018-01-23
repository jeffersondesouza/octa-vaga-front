import { Component, OnInit } from '@angular/core';
import { DraggableOptions } from '../../index';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  private showEditMenu = false;
  private draggableOptions: DraggableOptions;

  constructor() { }

  ngOnInit() {
    this.draggableOptions = { zone: 'dropzone', draggdedElementId: 'input-label' };
  }

  onClick(event) {
    console.log(event);
  }

}
