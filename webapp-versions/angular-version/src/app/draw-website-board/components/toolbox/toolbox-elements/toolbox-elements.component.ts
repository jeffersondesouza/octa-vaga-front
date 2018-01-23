import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { DropZoneService } from './../../../shared/services/drop-zone.service';

@Component({
  selector: 'app-toolbox-elements',
  templateUrl: './toolbox-elements.component.html',
  styleUrls: ['./toolbox-elements.component.scss']
})
export class ToolboxElementsComponent implements OnInit, OnDestroy {




  private dropZoneServiceSub: Subscription;

  constructor(
    private dropZoneService: DropZoneService

  ) { }


  ngOnInit() {
    this.dropZoneServiceSub = this.dropZoneService.createNewElement$
      .subscribe(elementId => { });
  }



  ngOnDestroy() {
    this.dropZoneServiceSub.unsubscribe();
  }

}
