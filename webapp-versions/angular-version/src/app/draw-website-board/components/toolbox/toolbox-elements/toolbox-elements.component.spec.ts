import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolboxElementsComponent } from './toolbox-elements.component';

describe('ToolboxElementsComponent', () => {
  let component: ToolboxElementsComponent;
  let fixture: ComponentFixture<ToolboxElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolboxElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolboxElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
