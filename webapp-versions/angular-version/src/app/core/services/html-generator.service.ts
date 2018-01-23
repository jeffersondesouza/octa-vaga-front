import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class HtmlGeneratorService {

  private htmlCodeChangesSubject = new Subject<string>();

  public htmlCodeChanges$ = this.htmlCodeChangesSubject.asObservable();

  emmitHtmlCodeChanges(value: string) {
    this.htmlCodeChangesSubject.next(value);
  }

}
