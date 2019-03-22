import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopsPage } from './workshops.page';

describe('WorkshopsPage', () => {
  let component: WorkshopsPage;
  let fixture: ComponentFixture<WorkshopsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
