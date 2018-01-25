import { Sanitizer, Component, OnInit, ElementRef } from '@angular/core';

import { HighlightJsService } from 'angular2-highlight-js';

@Component({
  selector: 'app-code-modal',
  templateUrl: './code-modal.component.html',
  styleUrls: ['./code-modal.component.scss'],
})
export class CodeModalComponent implements OnInit {

  private showModal = false;
  private code;

  constructor(
    private sanitizer: Sanitizer,
  ) { }

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
    this.code = this.removeAngularCodeStrings(code);
  }

  removeAngularCodeStrings(code) {
    code = code.replace(/_ngcontent.*=""/g, '');
    code = code.replace(/ng-reflect-.*="\[object Object\]"/g, '');
    code = code.replace(/<!--.*\n*/g, '');
    code = code.replace(/"ng-reflect-ng-if": "false"/g, '');
    code = code.replace(/}-->/g, '');
    code = code.replace(/<app-page-element-edit-menu.*>/g, '');
    code = code.replace(/<app-page-element-edit-menu\s*>/g, '');

    return code;
  }

}
