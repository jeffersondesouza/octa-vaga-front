import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class HtmlGeneratorService {

  private htmlCodeChangesSubject = new Subject<string>();
  private notifyShowCodeModalSubject = new Subject<boolean>();

  public htmlCodeChanges$ = this.htmlCodeChangesSubject.asObservable();
  public notifyShowCodeModal$ = this.notifyShowCodeModalSubject.asObservable();

  emmitHtmlCodeChanges(value: string) {
    this.htmlCodeChangesSubject.next(value);
  }

  notifyShowCodeModal() {
    this.notifyShowCodeModalSubject.next(true);
  }

}
