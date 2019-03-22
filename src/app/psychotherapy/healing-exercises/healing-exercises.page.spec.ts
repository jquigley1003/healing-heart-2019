import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealingExercisesPage } from './healing-exercises.page';

describe('HealingExercisesPage', () => {
  let component: HealingExercisesPage;
  let fixture: ComponentFixture<HealingExercisesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealingExercisesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealingExercisesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
