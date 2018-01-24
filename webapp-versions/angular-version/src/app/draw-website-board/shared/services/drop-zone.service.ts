import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DropZoneService {

  private createNewElement = new Subject<{ elementId: any }>();
  public createNewElement$ = this.createNewElement.asObservable();

  private inputLabels = [1];
  private checkbox = [1];
  private buttons = [1];
  private titles = [1];
  private texts = [1];

  public elementsPage = {
    'input-label': this.inputLabels,
    'checkbox': this.checkbox,
    'button': this.buttons,
    'titles': this.titles,
    'text': this.texts,
  };


  constructor() { }

  emitCreateNewElement(value: any) {
    this.createNewElement.next({ elementId: value.elementId });
    this.elementsPage[value.elementId].push(1);
  }

}
