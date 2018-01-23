import { Component, OnInit } from '@angular/core';

import { Codeblock } from 'ng2-prism/codeblock';

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
    this.code = code;
    this.showModal = true;
  }

}
