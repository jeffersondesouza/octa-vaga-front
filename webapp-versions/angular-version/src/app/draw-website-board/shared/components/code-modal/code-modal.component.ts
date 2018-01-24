import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

import { HighlightJsService } from 'angular2-highlight-js';

@Component({
  selector: 'app-code-modal',
  templateUrl: './code-modal.component.html',
  styleUrls: ['./code-modal.component.scss'],
})
export class CodeModalComponent implements OnInit, AfterViewInit {

  private showModal = false;
  private code;

  constructor(private el: ElementRef, private service: HighlightJsService) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.service.highlight(this.el.nativeElement.querySelector('.highlight'));
  }

  hide() {
    this.showModal = false;
  }

  show(code) {
    this.parseToHtml(code);
    this.showModal = true;
  }

  parseToHtml(code: string) {
    code = document.getElementById('dropzone').outerHTML;


    code = code.replace(/_ngcontent.*=""/g, '');
    code = code.replace(/ng-reflect-app-drop-target="\[object Object\]"/g, '');
    code = code.replace(/draggable="\[object Object\]"/g, '');
    code = code.replace(/draggable="\[object Object\]"/g, '');
    code = code.replace(/<app-page-element-edit-menu.*<\/app-page-element-edit-menu>/, '');
    code = code.replace(/<!--.*\n*/g, '');
code = code.replace(/}-->/g, '');
code = code.replace(/"ng-reflect-ng-if": "false"/g, '');



    code = code.replace(/<div/g, '\n<div');
    code = code.replace(/<\/div>/g, '</div>\n');
    code = code.replace(/<p/g, '\n\n<p');
    code = code.replace(/<\/p>/g, '</p>\n');
    code = code.replace(/<\/p>/g, '</section>\n');


    this.code = code;

  }

}
