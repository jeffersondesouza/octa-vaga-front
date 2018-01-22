import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawBoardPageComponent } from './draw-board-page.component';

describe('DrawBoardPageComponent', () => {
  let component: DrawBoardPageComponent;
  let fixture: ComponentFixture<DrawBoardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawBoardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawBoardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
