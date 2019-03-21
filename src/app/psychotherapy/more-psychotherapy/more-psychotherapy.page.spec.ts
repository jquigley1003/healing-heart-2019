import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorePsychotherapyPage } from './more-psychotherapy.page';

describe('MorePsychotherapyPage', () => {
  let component: MorePsychotherapyPage;
  let fixture: ComponentFixture<MorePsychotherapyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorePsychotherapyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorePsychotherapyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
