import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychotherapyPage } from './psychotherapy.page';

describe('PsychotherapyPage', () => {
  let component: PsychotherapyPage;
  let fixture: ComponentFixture<PsychotherapyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychotherapyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychotherapyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
