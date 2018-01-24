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

  parseToHtml(code: string) {
    code = code.replace(/\r?\n|\r/g, '');
    code = code.replace(/_ngcontent-[a-z][0-9]=""/g, '');
    code = code.replace(/ng-reflect-app-drop-target="\[object Object\]"/g, '');
    code = code.replace(/draggable="\[object Object\]"/g, '');
    code = code.replace(/draggable="\[object Object\]"/g, '');
    code = code.replace(/<app-page-element-edit-menu.*<\/app-page-element-edit-menu>/, '');
    code = code.replace(/<!--.*-->/g, '');


    this.code = document.createElement('div');

    this.code.innerHTML = code;
    console.log(this.code)
  }

}
