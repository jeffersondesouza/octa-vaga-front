import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-code-modal',
  templateUrl: './code-modal.component.html',
  styleUrls: ['./code-modal.component.scss']
})
export class CodeModalComponent implements OnInit {

  private showModal = false;
  private code;

  constructor() { }

  ngOnInit() {
  }

  hide() {
    this.showModal = false;
  }

  show(code) {
    this.parseToHtml(code);

    this.showModal = true;
  }

  parseToHtml(code) {
    this.code = code;
  }

}
