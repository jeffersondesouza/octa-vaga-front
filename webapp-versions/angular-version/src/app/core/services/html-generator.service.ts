import { FileGeneratorService } from './file-generator.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class HtmlGeneratorService {

  private htmlCodeChangesSubject = new Subject<string>();
  private notifyShowCodeModalSubject = new Subject<boolean>();
  private notifyDownloadGeneratedHtmlSubject = new Subject<boolean>();

  public htmlCodeChanges$ = this.htmlCodeChangesSubject.asObservable();
  public notifyShowCodeModal$ = this.notifyShowCodeModalSubject.asObservable();
  public notifyDownloadGeneratedHtml$ = this.notifyDownloadGeneratedHtmlSubject.asObservable();


  constructor(
    private router: Router,
    private fileGeneratorService: FileGeneratorService
  ) { }


  emmitHtmlCodeChanges(value: string) {
    this.htmlCodeChangesSubject.next(value);
  }

  notifyShowCodeModal() {
    this.notifyShowCodeModalSubject.next(true);
  }

  notifyDownloadGeneratedHtml() {
    this.notifyDownloadGeneratedHtmlSubject.next(true);
  }

  dowloadFile(htmlGenerated) {

    const anchor = document.createElement('a');
    const downloadEvent = document.createEvent('MouseEvents');
    const { dataURI, filename } = this.fileGeneratorService.getFile(htmlGenerated);

    anchor.href = dataURI;
    anchor['download'] = filename;

    // Use of deprecated function to satisfy TypeScript.
    downloadEvent.initMouseEvent('click', true, false, document.defaultView, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    anchor.dispatchEvent(downloadEvent);
  }

}
