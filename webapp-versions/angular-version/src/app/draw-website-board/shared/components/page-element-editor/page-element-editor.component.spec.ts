import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageElementEditorComponent } from './page-element-editor.component';

describe('PageElementEditorComponent', () => {
  let component: PageElementEditorComponent;
  let fixture: ComponentFixture<PageElementEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageElementEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageElementEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
