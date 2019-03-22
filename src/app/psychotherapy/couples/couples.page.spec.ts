import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouplesPage } from './couples.page';

describe('CouplesPage', () => {
  let component: CouplesPage;
  let fixture: ComponentFixture<CouplesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouplesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouplesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
