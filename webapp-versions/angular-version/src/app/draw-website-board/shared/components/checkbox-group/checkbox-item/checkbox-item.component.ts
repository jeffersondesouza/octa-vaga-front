import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox-item',
  templateUrl: './checkbox-item.component.html',
  styleUrls: ['./checkbox-item.component.scss']
})
export class CheckboxItemComponent implements OnInit {

  @Input() label = 'Option';
  type = 'checkbox';
  isEditingLabel = false;

  constructor() { }

  ngOnInit() {
  }

  onEditLabel(input) {
    this.isEditingLabel = true;
  }

  onEditLabelDone() {
    this.isEditingLabel = false;
  }

}
