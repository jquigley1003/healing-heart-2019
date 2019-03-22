import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCoachingPage } from './life-coaching.page';

describe('LifeCoachingPage', () => {
  let component: LifeCoachingPage;
  let fixture: ComponentFixture<LifeCoachingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeCoachingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCoachingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
