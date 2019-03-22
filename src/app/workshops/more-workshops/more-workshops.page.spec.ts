import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreWorkshopsPage } from './more-workshops.page';

describe('MoreWorkshopsPage', () => {
  let component: MoreWorkshopsPage;
  let fixture: ComponentFixture<MoreWorkshopsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreWorkshopsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreWorkshopsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
