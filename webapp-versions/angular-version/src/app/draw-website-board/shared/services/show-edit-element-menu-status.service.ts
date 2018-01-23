import { Injectable } from '@angular/core';

@Injectable()
export class ShowEditElementMenuStatusService {

  isParentElementDropzoneArea(parentId: string) {
    return parentId === 'dropzone';
  }

  isParentElementBody(localName: string) {
    return localName === 'body';
  }


  checkIfInDropzoneArea(parentElement: any, showEditMenu: boolean) {
    if (this.isParentElementDropzoneArea(parentElement.id)) {
      showEditMenu = !showEditMenu;

      return showEditMenu;
    } else if (this.isParentElementBody(parentElement.localName)) {
      showEditMenu = false;
      return showEditMenu;
    }
    return this.checkIfInDropzoneArea(parentElement.offsetParent, showEditMenu);
  }

}
