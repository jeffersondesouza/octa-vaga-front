export interface PageElement {
  showEditMenu: boolean;
  elementsLives: boolean;
  onClick(event): void;
  onElementDestroyed(): void;

}
