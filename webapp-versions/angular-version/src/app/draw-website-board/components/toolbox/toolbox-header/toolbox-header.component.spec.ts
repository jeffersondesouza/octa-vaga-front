import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolboxHeaderComponent } from './toolbox-header.component';

describe('ToolboxHeaderComponent', () => {
  let component: ToolboxHeaderComponent;
  let fixture: ComponentFixture<ToolboxHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolboxHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolboxHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
