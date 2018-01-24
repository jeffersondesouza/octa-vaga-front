import { Component, OnInit, ViewChild } from '@angular/core';

import { CodeModalComponent } from '../../../draw-website-board/shared/components/code-modal/code-modal.component';
import { HtmlGeneratorService } from '../../../draw-website-board/shared/services/html-generator.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(
    private htmlGeneratorService: HtmlGeneratorService
  ) { }

  ngOnInit() {

  }

  onShowGeneratedHtml() {
    this.htmlGeneratorService.notifyShowCodeModal();
  }

  onDownloadGeneratedHtml() {
    this.htmlGeneratorService.notifyDownloadGeneratedHtml();
  }

}
