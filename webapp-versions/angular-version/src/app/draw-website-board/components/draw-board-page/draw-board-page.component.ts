import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { HtmlGeneratorService } from './../../../core/services/html-generator.service';
import { CodeModalComponent } from '../../shared/components/code-modal/code-modal.component';

@Component({
  selector: 'app-draw-board-page',
  templateUrl: './draw-board-page.component.html',
  styleUrls: ['./draw-board-page.component.scss']
})
export class DrawBoardPageComponent implements OnInit, OnDestroy {


  htmlGenerated;

  @ViewChild(CodeModalComponent) codeModalComponent: CodeModalComponent;


  private htmlGeneratorServiceSub: Subscription;
  private notifyShowCodeModalSub: Subscription;

  constructor(
    private htmlGeneratorService: HtmlGeneratorService
  ) { }

  ngOnInit() {

    this.htmlGeneratorServiceSub = this.htmlGeneratorService.htmlCodeChanges$
      .subscribe(htmlGenerated => {
        this.htmlGenerated = htmlGenerated;
        console.log(htmlGenerated);
      });


    this.notifyShowCodeModalSub = this.htmlGeneratorService.notifyShowCodeModal$
      .subscribe(htmlGenerated => {
       this.codeModalComponent.show(this.htmlGenerated);
      });

  }


  ngOnDestroy() {
    this.htmlGeneratorServiceSub.unsubscribe();
    this.notifyShowCodeModalSub.unsubscribe();
  }
}
