import { Component, OnInit } from '@angular/core';

import { HtmlGeneratorService } from './../../services/html-generator.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private htmlGenerated;

  constructor(
    private htmlGeneratorService: HtmlGeneratorService
  ) { }

  ngOnInit() {
    this.htmlGeneratorService.htmlCodeChanges$
      .subscribe(htmlGenerated => {
        this.htmlGenerated = htmlGenerated;
        console.log(htmlGenerated);
      });
  }

  onShowGeneratedHtml() {

  }
}
