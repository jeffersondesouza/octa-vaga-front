import { Component, OnInit, Input, Output, EventEmitter, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-page-element-edit-menu',
  templateUrl: './page-element-edit-menu.component.html',
  styleUrls: ['./page-element-edit-menu.component.scss']
})
export class PageElementEditMenuComponent implements OnInit {

  @Input() deleteButtonPosition: { top: number, left: number };
  @Input() showOptionsMenu = false;
  @Input() parent;

  @Output() editMenuOpen: EventEmitter<boolean> = new EventEmitter();
  @Output() elementDestroyed: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private renderer: Renderer2
  ) { }


  ngOnInit() {
    this.listenClicksOnPageToToogleVisibility();
  }

  onEdit(event) {
    this.editMenuOpen.next(true);
  }

  // It was nedd to close edit menu options element when click outside the main component
  listenClicksOnPageToToogleVisibility(): void {
    this.renderer.listen('document', 'click', event => {

      if (event.target.id === 'dropzone') {
        this.showOptionsMenu = false;
      }
    });
  }

  onDestroyElement() {
    this.elementDestroyed.emit(true);
  }


}
