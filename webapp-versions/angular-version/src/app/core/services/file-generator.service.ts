import { Injectable } from '@angular/core';

@Injectable()
export class FileGeneratorService {

  constructor() { }

  getFile(content) {

    const filename = 'octa-template.html';
    const filetype = 'html';

    const dataURI = `data:${filetype};base64,${btoa(content)}`;

    return { dataURI, filename };
  }

}
