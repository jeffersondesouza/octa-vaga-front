import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageElementEditMenuComponent } from './page-element-edit-menu.component';

describe('PageElementEditMenuComponent', () => {
  let component: PageElementEditMenuComponent;
  let fixture: ComponentFixture<PageElementEditMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageElementEditMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageElementEditMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
