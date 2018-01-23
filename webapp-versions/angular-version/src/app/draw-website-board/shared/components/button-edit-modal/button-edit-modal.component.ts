import { Component, OnInit, Input, Output, Renderer2, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-edit-modal',
  templateUrl: './button-edit-modal.component.html',
  styleUrls: ['./button-edit-modal.component.scss']
})
export class ButtonEditModalComponent implements OnInit {



  @Output() labelChange = new EventEmitter<string>();
  @Output() fontSizeChange = new EventEmitter<number>();
  @Output() bgColorChange = new EventEmitter<string>();
  @Output() fgColorChange = new EventEmitter<string>();
  @Output() widthChange = new EventEmitter<number>();
  @Output() heightChange = new EventEmitter<number>();



  @Input() showModalMenu;

  @Input() set label(value) {
    this.labelChange.emit(value);
  }

  @Input() set fontSize(value) {
    this.fontSizeChange.emit(value);
  }

  @Input() set bgColor(value) {
    this.bgColorChange.emit(value);
  }

  @Input() set fgColor(value) {
    this.fgColorChange.emit(value);
  }

  @Input() set width(value) {
    this.widthChange.emit(value);
  }

  @Input() set height(value) {
    this.heightChange.emit(value);
  }



  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.listenClicksOnPageToToogleVisibility();
  }

  listenClicksOnPageToToogleVisibility(): void {
    this.renderer.listen('document', 'click', event => {

    });
  }

  onClose() {
    this.showModalMenu = false;
  }

  show() {
    this.showModalMenu = true;
  }


}
