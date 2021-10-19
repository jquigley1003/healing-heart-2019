import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarryingYourselfPage } from './marrying-yourself.page';

describe('MarryingYourselfPage', () => {
  let component: MarryingYourselfPage;
  let fixture: ComponentFixture<MarryingYourselfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarryingYourselfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarryingYourselfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
