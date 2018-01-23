import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEditModalComponent } from './input-edit-modal.component';

describe('InputEditModalComponent', () => {
  let component: InputEditModalComponent;
  let fixture: ComponentFixture<InputEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
