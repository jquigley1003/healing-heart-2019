import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreAboutMePage } from './more-about-me.page';

describe('MoreAboutMePage', () => {
  let component: MoreAboutMePage;
  let fixture: ComponentFixture<MoreAboutMePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreAboutMePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreAboutMePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
