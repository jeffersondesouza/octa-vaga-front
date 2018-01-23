import { Component, OnInit, ViewChild } from '@angular/core';

import { HtmlGeneratorService } from './../../services/html-generator.service';
import { CodeModalComponent } from '../../../draw-website-board/shared/components/code-modal/code-modal.component';

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
}
