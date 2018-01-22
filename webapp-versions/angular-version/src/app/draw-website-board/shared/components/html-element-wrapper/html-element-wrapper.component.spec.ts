import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlElementWrapperComponent } from './html-element-wrapper.component';

describe('HtmlElementWrapperComponent', () => {
  let component: HtmlElementWrapperComponent;
  let fixture: ComponentFixture<HtmlElementWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlElementWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlElementWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
