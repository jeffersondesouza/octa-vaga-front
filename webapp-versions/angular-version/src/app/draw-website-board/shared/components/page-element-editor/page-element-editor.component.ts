import { Component, OnInit, Renderer2, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-page-element-editor',
  templateUrl: './page-element-editor.component.html',
  styleUrls: ['./page-element-editor.component.scss']
})
export class PageElementEditorComponent implements OnInit {



  @Output() hide = new EventEmitter<boolean>();
  @Output() labelChange = new EventEmitter<string>();
  @Output() fontSizeChange = new EventEmitter<number>();
  @Output() bgColorChange = new EventEmitter<string>();
  @Output() fgColorChange = new EventEmitter<string>();
  @Output() widthChange = new EventEmitter<number>();
  @Output() heightChange = new EventEmitter<number>();


  @Input() showModalMenu = false;

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
    this.hide.next(true);
  }

  show() {
    this.showModalMenu = true;
  }

}
