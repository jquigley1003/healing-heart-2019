import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationsVideosPage } from './publications-videos.page';

describe('PublicationsVideosPage', () => {
  let component: PublicationsVideosPage;
  let fixture: ComponentFixture<PublicationsVideosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationsVideosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationsVideosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
