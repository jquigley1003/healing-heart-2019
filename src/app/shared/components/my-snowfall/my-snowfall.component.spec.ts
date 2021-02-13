import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySnowfallComponent } from './my-snowfall.component';

describe('MySnowfallComponent', () => {
  let component: MySnowfallComponent;
  let fixture: ComponentFixture<MySnowfallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySnowfallComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySnowfallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
